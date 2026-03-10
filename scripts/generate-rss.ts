import { generateRss } from '../server/utils/generateRss'

generateRss().catch(err => {
  console.error('Failed to generate RSS:', err)
  process.exit(1)
})
