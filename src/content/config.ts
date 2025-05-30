import { defineCollection, z } from "astro:content";
const integrations = defineCollection({
  schema: z.object({
    bgColor: z.string().optional(),
    email: z.string(),
    integration: z.string(),
    description: z.string(),
    permissions: z.array(z.string()),
    details: z.array(
      z.object({
        title: z.string(),
        value: z.string(),
        url: z.optional(z.string()),
      }),
    ),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    education: z.array(z.string()),
    experience: z.array(z.string()),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const helpcenter = defineCollection({
  schema: z.object({
    iconId: z.string().optional(),
    page: z.string(),
    description: z.string(),
    category: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    lastUpdated: z.string().optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
  }),
});
const customers = defineCollection({
  schema: z.object({
    customer: z.string(),
    bgColor: z.string().optional(),
    ctaTitle: z.string().optional(),
    testimonial: z.string().optional(),
    partnership: z.string().optional(),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    challengesAndSolutions: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      }),
    ),
    results: z.array(z.string()),
    about: z.string(),
    details: z.record(z.string()),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const changelog = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional(),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    authorAvatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  team: team,
  infopages: infopages,
  changelog: changelog,
  customers: customers,
  helpcenter: helpcenter,
  posts: postsCollection,
  integrations: integrations,
};
