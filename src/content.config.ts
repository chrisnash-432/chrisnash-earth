import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const letters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/letters' }),
  schema: z.object({
    title: z.string(),
    number: z.number(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
    recommendation: z
      .object({
        kind: z.string(), // book | film | podcast | practice
        title: z.string(),
        note: z.string().optional(),
        url: z.string().optional()
      })
      .optional()
  })
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    place: z.string().optional(),
    coords: z.string().optional()
  })
});

export const collections = { letters, now };
