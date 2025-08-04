import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const exampleCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/examples' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            org: z.string(),
            tags: z.array(z.string()),
            img: image(),
            description: z.string(),
            url: z.string().url(),
            date: z.coerce.date(),
            sortOrder: z.number().int(),
        }),
});

const linkCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/links' }),
    schema: () =>
        z.object({
            title: z.string(),
            icon: z.string(),
            url: z.string().url(),
            sortOrder: z.number().int(),
        }),
});

export const collections = {
    examples: exampleCollection,
    links: linkCollection,
};
