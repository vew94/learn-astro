import { defineCollection, reference, z } from "astro:content";

const article = defineCollection({
  schema: z.object({
    author: z.string().default("vew94"),
    created: z.date(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    modified: z.date().optional(),
    published: z.date().optional(),
    related: z.array(reference("article")),
    tags: z.array(reference("tags")),
    thumbnail: z.string().optional(),
    title: z.string(),
  }),
  type: "content",
});

const tags = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
  }),
  type: "data",
});

export const collection = {
  article,
  tags,
};
