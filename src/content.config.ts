import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    typology: z.enum(['Residential', 'Commercial', 'Interiors']),
    year: z.number(),
    location: z.string(),
    excerpt: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()),
    materials: z.array(z.string()),
    brief: z.string(),
    response: z.string(),
    featured: z.boolean().default(true),
    order: z.number(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { projects };
