import { z, defineCollection } from "astro:content";

const exampleCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            tag: z.string(),
            img: image(),
            description: z.string(),
            url: z.string().url(),
            date: z.coerce.date(),
            sortOrder: z.number().int(),
        }),
});

export const collections = {
    examples: exampleCollection,
};
