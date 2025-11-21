import { serverQueryContent } from '#content/server'
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

  // Query blog posts
  const posts = await serverQueryContent(event, 'blog')
    .sort({ date: -1 })
    .find()

  // Add each post to the feed
  for (const post of posts) {
    // Skip drafts if applicable
    if (post.draft) continue

    feed.item({
      title: post.title || 'Untitled',
      description: post.description || post.excerpt || '',
      url: `${baseUrl}${post._path}`,
      date: post.date ? new Date(post.date) : new Date(),
      categories: post.tags || [],
      author: post.author || appConfig.siteName,
    })
  }

  // Set proper content type
  setResponseHeader(event, 'Content-Type', 'application/xml')
  
  // Return XML
  return feed.xml()
})
