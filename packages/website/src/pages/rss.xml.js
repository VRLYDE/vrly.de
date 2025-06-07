import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { seoConfig } from "@/config/seo";

export async function GET(context) {
  const posts = await getCollection("posts");
  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${seoConfig.site.name} Blog`,
    description: seoConfig.site.description,
    site: context.site || seoConfig.site.url,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/posts/${post.slug}/`,
      categories: [...post.data.tags, post.data.category],
      author: post.data.author,
    })),
    customData: `<language>de-DE</language>
<copyright>© ${new Date().getFullYear()} VRLY. Alle Rechte vorbehalten.</copyright>
<managingEditor>info@vrly.de (VRLY Team)</managingEditor>
<webMaster>info@vrly.de (VRLY Team)</webMaster>
<ttl>60</ttl>`,
  });
}
