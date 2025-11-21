import RSS from 'rss'

export default defineEventHandler(async (event) => {
  const appConfig = useAppConfig()
  
  const feed = new RSS({
    title: appConfig.siteName,
    description: 'Breaking free from corporate control, one self-hosted service at a time.',
    feed_url: 'https://helltop.net/feed.xml',
    site_url: 'https://helltop.net',
    language: 'en',
    image_url: 'https://helltop.net/cover.jpg',
  })

  // Fetch all blog posts
  const { data: posts } = await queryCollectionItem('blog')

  // Filter out drafts and sort by date
  const publishedPosts = posts
    .filter((post: any) => !post.draft)
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Add each post to the feed
  publishedPosts.forEach((post: any) => {
    feed.item({
      title: post.title,
      description: post.description || '',
      url: `https://helltop.net/${post._path}`,
      guid: `https://helltop.net${post._path}`,
      author: post.author || appConfig.siteName,
      date: new Date(post.date),
      categories: post.category ? [post.category] : [],
    })
  })

  setHeader(event, 'Content-Type', 'application/xml')
  return feed.xml({ indent: true })
})
