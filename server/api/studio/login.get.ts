import { setStudioUserSession } from '#imports'

export default defineEventHandler(async (event) => {
  // Read Authelia/Proxy headers
  // Note: Ensure your reverse proxy is configured to send these headers and that they are trusted.
  const user = getHeader(event, 'remote-user')
  const name = getHeader(event, 'remote-name') || user
  const email = getHeader(event, 'remote-email')

  if (!user) {
    // If no user header is found, we redirect to Authelia for authentication
    // Assuming the proxy is configured to protect this endpoint
    return sendRedirect(event, '/_studio')
  }

  // Set the Nuxt Studio user session
  await setStudioUserSession(event, {
    name: name as string,
    email: email as string,
    providerId: user as string
  })

  // Redirect back to the Studio UI
  return sendRedirect(event, '/_studio')
})
