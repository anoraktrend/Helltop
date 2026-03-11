export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn, login } = useOidcAuth()
  if (!loggedIn.value) {
    return await login('oidc', { callbackRedirectUrl: to.fullPath })
  }
})
