import { z, defineCollection } from "astro:content";

const exampleCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        tag: z.string(),
        img: z.string(),
        description: z.string(),
        url: z.string().url(),
        date: z.coerce.date()
    }),
});

export const collections = {
    examples: exampleCollection,
};
