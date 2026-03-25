import { glob } from 'astro/loaders'
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
  contentRaw?: string
  path?: string
}

export async function generateRss() {
  const baseUrl = process.env.SITE_URL || 'https://helltop.net'

  // Read MDX files directly and decode using gray-matter's frontmatter parsing
  try {
    const blogPath = path.join(process.cwd(), 'src', 'content', 'blog')
    const entries = await fs.readdir(blogPath, { withFileTypes: true })
    const mdxFiles = entries.filter(e => e.isFile() && /\.(md|mdx)$/.test(e.name))

    const posts: Post[] = []
    for (const file of mdxFiles) {
      const full = path.join(blogPath, file.name)
      const content = await fs.readFile(full, 'utf8')
      
      // Parse frontmatter (MDX uses YAML frontmatter like MD files)
      const firstSeparator = content.indexOf('---') + 3
      const afterFrontmatterIdx = content.slice(firstSeparator).indexOf('\n') >= 0 
        ? firstSeparator + afterFrontmatterIdx + 1
        : firstSeparator
      const bodyStart = content.indexOf('\n', afterFrontmatterIdx) + 1
      
      const frontmatterBlock = content.slice(0, bodyStart - firstSeparator).trim()
      let body = content.slice(bodyStart).trim()
      
      // Convert markdown to HTML in body for MDX content
      const md = new MarkdownIt({ html: true })
      body = md.render(body)

      const slug = file.name.replace(/\.(md|mdx)$/, '')
      posts.push({
        contentRaw: body,
        path: `/blog/${slug}`,
        slug,
      })
      
      // Parse frontmatter fields
    } catch (err) {
      if (frontmatterBlock) {
