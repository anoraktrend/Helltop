import RSS from 'rss'

function parseFrontmatter(content: string): Record<string, any> {
  const res: Record<string, any> = {}
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return res
  const block = m[1]
  const lines = block.split(/\r?\n/)
  for (const line of lines) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let val: any = line.slice(idx + 1).trim()
    if (!val) continue
    // booleans
    if (val === 'true') val = true
    else if (val === 'false') val = false
    // arrays like [a, b]
    else if (val.startsWith('[') && val.endsWith(']')) {
      try {
        val = JSON.parse(val)
      } catch {
        val = val.slice(1, -1).split(',').map((s: string) => s.trim())
      }
    // comma-separated
    } else if (val.includes(',') && !val.includes('http')) {
      val = val.split(',').map((s: string) => s.trim())
    }
    res[key] = val
  }
  return res
}

function stripFrontmatter(content: string): string {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}

function extractPostContent(post: any): string {
  if (!post) return ''
  if (typeof post.html === 'string' && post.html.trim()) return post.html
  if (typeof post.body === 'string' && post.body.trim()) return post.body
  if (typeof post.content === 'string' && post.content.trim()) return post.content
  if (typeof post.excerpt === 'string' && post.excerpt.trim()) return post.excerpt
  if (typeof post._body === 'string' && post._body.trim()) return post._body
  if (Array.isArray(post.body) && post.body.length) {
    try {
      return JSON.stringify(post.body)
    } catch {
      return ''
    }
  }
  return ''
}

export async function generateRss(event?: any) {
  // @ts-ignore - Nuxt/Nitro auto-imported
  const appConfig = useAppConfig()

  // @ts-ignore - Nuxt/Nitro auto-imported
  const getRequestProtocol = (evt: any) => evt?.node?.req?.protocol || 'https'
  // @ts-ignore - Nuxt/Nitro auto-imported  
  const getRequestHost = (evt: any) => evt?.node?.req?.headers?.host || 'localhost:3000'

  // Prefer explicit env var in CI, then app config, then runtime event
  const envUrl = process.env.NUXT_PUBLIC_SITE_URL || process.env.SITE_URL || ''

  // Determine base URL
  let baseUrl = envUrl || (appConfig as any).siteUrl || ''
  if (!baseUrl && event) {
    const protocol = getRequestProtocol(event)
    const host = getRequestHost(event)
    baseUrl = `${protocol}://${host}`
  }
  if (!baseUrl) baseUrl = 'http://localhost:3000'

  const feed = new RSS({
    title: (appConfig as any).siteName || 'Blog',
    description: 'Latest blog posts',
    feed_url: `${baseUrl}/rss.xml`,
    site_url: baseUrl,
    language: 'en',
    pubDate: new Date(),
    custom_namespaces: {
      atom: 'http://www.w3.org/2005/Atom'
    },
    custom_elements: [
      { 'atom:link': { _attr: { href: `${baseUrl}/rss.xml`, rel: 'self', type: 'application/rss+xml' } } },
      { lastBuildDate: new Date().toUTCString() }
    ],
  })

  // Try to load the content server API
  let posts: any[] = []
  try {
    // eslint-disable-next-line no-eval
    const dynamicImport = eval("(id) => import(id)")
    const contentServer = await dynamicImport('#content/server')

    // Content v3 uses queryCollection API
    if (contentServer.queryCollection) {
      try {
        const q = contentServer.queryCollection
        let query = q.call(contentServer, 'blog')
        if (typeof query.order === 'function') {
          query = query.order('date', 'DESC')
        }
        if (typeof query.where === 'function') {
          query = query.where('draft', '$ne', true)
        }
        if (typeof query.all === 'function') {
          posts = await query.all()
        } else if (typeof query.find === 'function') {
          posts = await query.find()
        }
        // eslint-disable-next-line no-console
        console.log('generateRss: loaded posts via queryCollection (blog), count=', posts.length)
      } catch (errInner) {
        // eslint-disable-next-line no-console
        console.warn('generateRss: queryCollection (blog) path failed:', errInner)
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('generateRss: content server API failed:', err)
  }

  // Fallback: read markdown files directly from content/blog
  if (!posts.length) {
    try {
      const fs = await import('fs/promises')
      const path = await import('path')
      const contentDir = path.join(process.cwd(), 'content', 'blog')
      const entries = await fs.readdir(contentDir)
      const mdFiles = entries.filter((f: string) => f.endsWith('.md') || f.endsWith('.mdx'))
      const parsed: any[] = []
      for (const file of mdFiles) {
        const full = path.join(contentDir, file)
        const txt = await fs.readFile(full, 'utf8')
        const fm = parseFrontmatter(txt)
        const slug = file.replace(/\.mdx?$/, '')
        parsed.push({
          title: fm.title,
          description: fm.description || fm.excerpt || '',
          date: fm.date,
          draft: fm.draft,
          tags: fm.tags,
          _path: `/blog/${slug}`,
          slug,
          author: fm.author,
          content_raw: stripFrontmatter(txt),
        })
      }
      // sort by date desc
      posts = parsed.sort((a: any, b: any) => (new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()))
    } catch (err2) {
      // eslint-disable-next-line no-console
      console.warn('RSS fallback failed to read content files:', err2)
      posts = []
    }
  }

  for (const post of posts) {
    if (post.draft) continue

    const postPath = post._path || post.path || (post.slug ? `/${post.slug}` : '/')
    const postDate = post.date || post.publishedAt || post.createdAt

    // Prefer pulling full post content (HTML or markdown) when available
    let content = extractPostContent(post)
    if (!content && (post.content_raw || post.content_raw === '')) {
      content = post.content_raw || ''
    }
    if (!content) content = post.description || post.excerpt || ''

    // Render markdown to HTML using Nuxt content renderer when available
    const renderToHtml = async (raw: string, path?: string): Promise<string> => {
      if (!raw && !path) return ''

      // If it already looks like HTML, return as-is
      if (raw && /<[a-z][\s\S]*>/i.test(raw)) return raw

      // Try using Nuxt Content server renderer if available
      try {
        // eslint-disable-next-line no-eval
        const dynamicImport = eval("(id) => import(id)")
        const contentServer = await dynamicImport('#content/server')
        if (contentServer && path && typeof contentServer.render === 'function') {
          try {
            const out = await contentServer.render(path)
            if (out) {
              if (typeof out === 'string') return out
              if (out?.html) return out.html
              if (out?.body) return out.body
            }
          } catch {}
        }
      } catch {
        // ignore and fallback
      }

      // Fallback to markdown-it
      try {
        // @ts-ignore - optional dependency loaded at runtime
        const mdModule: any = await import('markdown-it')
        const MarkdownIt = mdModule.default || mdModule
        const md = new MarkdownIt({ html: true })
        return md.render(raw || '')
      } catch {
        return raw || ''
      }
    }

    // If we have a canonical `_path`, prefer path-based rendering so transforms match the site
    content = await renderToHtml(content, post._path)

    const item: any = {
      title: post.title || 'Untitled',
      description: post.description || post.excerpt || '',
      url: `${baseUrl}${postPath}`,
      guid: `${baseUrl}${postPath}`,
      date: postDate ? new Date(postDate) : new Date(),
      categories: post.tags || post.tag || [],
      author: post.author || (appConfig as any).siteName,
    }

    // Add full content as `content:encoded` (wrapped in CDATA)
    if (content) {
      item.custom_elements = [
        { 'content:encoded': { _cdata: content } }
      ]
    }

    feed.item(item)
  }

  return feed.xml({ indent: true })
}
