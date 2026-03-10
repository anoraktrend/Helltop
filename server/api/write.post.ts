export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { title, slug, content } = body
  const config = useRuntimeConfig()

  if (!config.githubToken) {
    throw createError({ statusCode: 500, message: 'GitHub Token not configured' })
  }

  const filename = `content/blog/${slug}.md`
  const fileContent = `---
title: "${title}"
date: ${new Date().toISOString().split('T')[0]}
---

${content}`

  // 1. Get the file if it exists from GitHub
  let sha = ''
  try {
    const existing = await $fetch(`https://api.github.com/repos/anoraktrend/helltop/contents/${filename}`, {
      headers: { 
        'Authorization': `Bearer ${config.githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Helltop-Editor'
      }
    })
    sha = (existing as any).sha
  } catch (e) {
    // File doesn't exist
  }

  // 2. Create or Update via GitHub API
  try {
    const response = await $fetch(`https://api.github.com/repos/anoraktrend/helltop/contents/${filename}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${config.githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Helltop-Editor'
      },
      body: {
        message: `Blog: Add/Update ${title} via Server Editor`,
        content: b64EncodeUnicode(fileContent),
        sha: sha || undefined,
        branch: 'main'
      }
    })
    return { success: true }
  } catch (err: any) {
    throw createError({ statusCode: 500, message: err.message })
  }
})

// Helper for UTF-8 Base64 encoding
function b64EncodeUnicode(str: string) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode(parseInt(p1, 16))
  }))
}
