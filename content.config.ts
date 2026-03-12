import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        layout: z.string().default('default'),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        author: z.string().optional(),
        category: z.string().optional(),
        slug: z.string().optional(),
        layout: z.string().default('blog'),
        draft: z.boolean().default(false),
      }),
    }),
    homepage: defineCollection({
      type: 'data',
      source: 'index.json',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string()
        }),
        sections: z.array(z.object({
          id: z.string(),
          title: z.string(),
          subtitle: z.string().optional(),
          type: z.enum(['text', 'infrastructure', 'software', 'cta']),
          content: z.string().optional(),
          list: z.array(z.object({
            title: z.string(),
            text: z.string()
          })).optional(),
          quote: z.string().optional(),
          items: z.array(z.any()).optional()
        })),
        footer: z.object({
          lastUpdated: z.string(),
          statusUrl: z.string()
        })
      })
    })
  },
})
