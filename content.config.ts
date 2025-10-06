import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    /**
     * This is collection for content-wind theme
     * Create `content.config.ts` in project root to overwrite this
     */
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        layout: z.string(),
      }),
    }),
    /**
     * Blog collection for blog posts
     */
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        tags: z.array(z.string()).optional(),
        layout: z.string().default('blog'),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
