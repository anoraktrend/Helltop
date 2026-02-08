import RSS from 'rss'
import fs from 'fs/promises'
import path from 'path'
import MarkdownIt from 'markdown-it'

interface FrontmatterResult {
  title?: string
  description?: string
  excerpt?: string
  date?: string
  draft?: boolean
  tags?: string[]
  author?: string
  [key: string]: string | string[] | boolean | undefined
}

function parseFrontmatter(content: string): FrontmatterResult {
  const res: FrontmatterResult = {}
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return res
  const block = m[1]
  const lines = block.split(/\r?\n/)
  for (const line of lines) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let val: string = line.slice(idx + 1).trim()
    if (!val) continue
    // booleans
    if (val === 'true') val = 'true'
    else if (val === 'false') val = 'false'
    // arrays like [a, b]
    else if (val.startsWith('[') && val.endsWith(']')) {
      try {
        res[key] = JSON.parse(val)
      } catch {
        res[key] = val.slice(1, -1).split(',').map((s: string) => s.trim())
      }
    }
    // comma-separated
    else if (val.includes(',') && !val.includes('http')) {
      res[key] = val.split(',').map((s: string) => s.trim())
    } else {
      res[key] = val
    }
  }
  return res
}

function stripFrontmatter(content: string): string {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}

interface Post {
  title?: string
  description?: string
  date?: string
  publishedAt?: string
  createdAt?: string
  draft?: boolean
  tags?: string[]
  tag?: string
  author?: string
  content_raw?: string
  _path?: string
  slug?: string
}

async function getSiteConfig() {
  try {
    const appConfigPath = path.join(process.cwd(), 'app.config.ts')
    const configContent = await fs.readFile(appConfigPath, 'utf8')
    const siteNameMatch = configContent.match(/siteName:\s*['"]([^'"]+)['"]/)
    const siteUrlMatch = configContent.match(/siteUrl:\s*['"]([^'"]+)['"]/)
    if (siteNameMatch || siteUrlMatch) {
      return {
        siteName: siteNameMatch?.[1] || 'Helltop Blog',
        siteUrl: siteUrlMatch?.[1] || ''
      }
    }
  } catch {
    // ignore
  }
  return {
    siteName: 'Helltop Blog',
    siteUrl: ''
  }
}

export async function generateRss() {
  const siteConfig = await getSiteConfig()
  const envUrl = process.env.NUXT_PUBLIC_SITE_URL || process.env.SITE_URL || ''
  
  let baseUrl = envUrl || siteConfig.siteUrl || ''
  if (!baseUrl) baseUrl = 'https://helltop.net/blog/'

  const feed = new RSS({
    title: siteConfig.siteName || 'Blog',
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

  // Read markdown files directly from content/blog
  const posts: Post[] = []
  try {
    const contentDir = path.join(process.cwd(), 'content', 'blog')
    const entries = await fs.readdir(contentDir)
    const mdFiles = entries.filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    
    for (const file of mdFiles) {
      const full = path.join(contentDir, file)
      const txt = await fs.readFile(full, 'utf8')
      const fm = parseFrontmatter(txt)
      const slug = file.replace(/\.mdx?$/, '')
      posts.push({
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
    posts.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0
      const dateB = b.date ? new Date(b.date).getTime() : 0
      return dateB - dateA
    })
    console.log(`generateRss: loaded ${posts.length} posts from content/blog`)
  } catch (err) {
    console.warn('RSS: failed to read content files:', err)
  }

  const md = new MarkdownIt({ html: true })

  for (const post of posts) {
    if (post.draft) continue

    const postPath = post._path || (post.slug ? `/${post.slug}` : '/')
    const postDate = post.date || post.publishedAt || post.createdAt
    
    // Render markdown to HTML
    const contentHtml = post.content_raw ? md.render(post.content_raw) : ''
    const description = post.description || ''

    const item: {
      title: string
      description: string
      url: string
      guid: string
      date: Date
      categories: string[]
      author: string
      custom_elements?: Array<{ 'content:encoded': { _cdata: string } }>
    } = {
      title: post.title || 'Untitled',
      description,
      url: `${baseUrl}${postPath}`,
      guid: `${baseUrl}${postPath}`,
      date: postDate ? new Date(postDate) : new Date(),
      categories: Array.isArray(post.tags) ? post.tags : post.tag ? [post.tag] : [],
      author: post.author || siteConfig.siteName || '',
    }

    // Add full content as content:encoded
    if (contentHtml) {
      item.custom_elements = [
        { 'content:encoded': { _cdata: contentHtml } }
      ]
    }

    feed.item(item)
  }

  const xml = feed.xml({ indent: true })

  // Write to public/
  const publicDir = path.join(process.cwd(), 'public')
  await fs.mkdir(publicDir, { recursive: true })
  await fs.writeFile(path.join(publicDir, 'rss.xml'), xml, 'utf8')
  console.log('Generated rss.xml in public/')

  return xml
}
