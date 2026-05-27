import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    source: z.enum(['Forbes', 'LinkedIn', 'Personal']),
    sourceType: z.enum(['article', 'post', 'column']).default('article'),
    url: z.string().url().optional(),
    canonical: z.string().url().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    wordCount: z.number().optional(),
    bodyAvailable: z.boolean().default(true),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tag: z.enum(['workshop', 'live-stream', 'conference', 'podcast', 'panel', 'keynote', 'lecture']),
    location: z.string().optional(),
    eventAttendanceMode: z.enum(['offline', 'online', 'mixed']).default('offline'),
    organizer: z.string().optional(),
    url: z.string().url().optional(),
    description: z.string().optional(),
    status: z.enum(['upcoming', 'past', 'cancelled']).default('upcoming'),
  }),
});

const qa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/qa' }),
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
    })).default([]),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { writing, events, qa };
