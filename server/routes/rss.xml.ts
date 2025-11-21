import { queryContent } from '#content/server'
import RSS from 'rss'

export default defineEventHandler(async (event) => {
  // Get app config
  const appConfig = useAppConfig()
  
  // Get the base URL from the request
  const protocol = getRequestProtocol(event)
  const host = getRequestHost(event)
  const baseUrl = `${protocol}://${host}`

  // Create RSS feed
  const feed = new RSS({
    title: appConfig.siteName || 'Blog',
    description: 'Latest blog posts',
    feed_url: `${baseUrl}/rss.xml`,
    site_url: baseUrl,
    language: 'en',
    pubDate: new Date(),
  })

  // Query blog posts using server content API and sort by date descending
  const posts = await queryContent('blog')
    .sort({ date: -1 })
    .find()

  // Add each post to the feed
  for (const post of posts) {
    // Skip drafts if applicable
    if (post.draft) continue

    // Defensive field mapping for different content schemas
    const postPath = post._path || post.path || (post.slug ? `/${post.slug}` : '/')
    const postDate = post.date || post.publishedAt || post.createdAt

    feed.item({
      title: post.title || 'Untitled',
      description: post.description || post.excerpt || '',
      url: `${baseUrl}${postPath}`,
      date: postDate ? new Date(postDate) : new Date(),
      categories: post.tags || post.tag || [],
      author: post.author || appConfig.siteName,
    })
  }

  // Set proper content type
  setResponseHeader(event, 'Content-Type', 'application/xml')
  
  // Return XML
  return feed.xml()
})