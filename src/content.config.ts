import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    slug: z.string(),
    layout: z.string().optional(),
    draft: z.boolean().default(false),
    sections: z.array(z.object({
      title: z.string(),
      content: z.string()
    })).optional()
  })
});

const homepage = defineCollection({
  loader: glob({ pattern: "1.index.json", base: "./src/content/homepage" }),
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
});

export const collections = { blog, homepage };
