import RSS from 'rss'

function parseFrontmatter(content: string): any {
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
        val = val.slice(1, -1).split(',').map(s => s.trim())
      }
    // comma-separated
    } else if (val.includes(',') && !val.includes('http')) {
      val = val.split(',').map(s => s.trim())
    }
    res[key] = val
  }
  return res
}

export async function generateRss(event?: any) {
  const appConfig = useAppConfig()

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
  })

  // Try to load the content server API in a way that avoids static analysis by bundlers.
  // If that fails (e.g., in some Nitro bundling environments), fall back to reading
  // the `content/blog` files directly from disk and parsing frontmatter.
  let posts: any[] = []
  try {
    // Use eval to prevent rollup/nitro from statically resolving the import specifier.
    // eslint-disable-next-line no-eval
    const dynamicImport = eval("(id) => import(id)")
    const contentServer = await dynamicImport('#content/server')
    const queryCollection = contentServer.queryCollection
    posts = await queryCollection(event, 'blog').order('date', 'DESC').all()
  } catch (err) {
    // Fallback: read markdown files from content/blog
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
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
        })
      }
      // sort by date desc
      posts = parsed.sort((a, b) => (new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()))
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

    feed.item({
      title: post.title || 'Untitled',
      description: post.description || post.excerpt || '',
      url: `${baseUrl}${postPath}`,
      date: postDate ? new Date(postDate) : new Date(),
      categories: post.tags || post.tag || [],
      author: post.author || (appConfig as any).siteName,
    })
  }

  return feed.xml({ indent: true })
}
