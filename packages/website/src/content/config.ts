import { defineCollection, z } from "astro:content";

const rechtliches = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160), // SEO meta description length
    author: z.string().default("VRLY Team"),
    authorAvatar: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .default({
        url: "/images/team/vrly-avatar.png",
        alt: "VRLY Team Avatar",
      }),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).default(["Digitalisierung"]),
    category: z
      .enum([
        "KI & Automatisierung",
        "DSGVO & Compliance",
        "Praxistipps",
        "Technologie",
        "Fallstudien",
        "News",
      ])
      .default("Praxistipps"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(), // in minutes
    keywords: z.array(z.string()).optional(), // Additional SEO keywords
  }),
});

export const collections = {
  rechtliches: rechtliches,
  posts: postsCollection,
};
