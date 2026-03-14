import { clearStudioUserSession } from '#imports'

export default defineEventHandler(async (event) => {
  await clearStudioUserSession(event)
  return sendRedirect(event, '/')
})
