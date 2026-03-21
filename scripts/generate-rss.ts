import { generateRss } from '../src/server/utils/generateRss'

generateRss().catch((err: any) => {
  console.error('Failed to generate RSS:', err)
  process.exit(1)
})
