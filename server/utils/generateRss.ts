import RSS from 'rss'

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

  // Dynamically import content server API to avoid top-level package import
  let posts: any[] = []
  try {
    // import inside the function so Node doesn't try to resolve this alias at module-load time
    // which can fail during prerender in some CI environments
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const contentServer = await import('#content/server')
    const queryCollection = contentServer.queryCollection
    posts = await queryCollection(event, 'blog').order('date', 'DESC').all()
  } catch (err) {
    // If the import fails, log and continue with empty list
    // eslint-disable-next-line no-console
    console.warn('Could not import #content/server during RSS generation:', err)
    posts = []
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
