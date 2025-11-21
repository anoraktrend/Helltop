import { generateRss } from '../utils/generateRss'

export default defineEventHandler(async (event) => {
  const xml = await generateRss(event)
  setResponseHeader(event, 'Content-Type', 'application/xml')
  return xml
})