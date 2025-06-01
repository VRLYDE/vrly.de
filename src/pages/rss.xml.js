import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "VRLY - KI & Workflows für Psychotherapeuten",
    description:
      "Spezialisierte KI-gestützte Workflow-Automatisierung und DSGVO-konforme Digitalisierungslösungen exklusiv für Psychotherapeut:Innen in Hannover. Mehr Zeit für Ihre Patienten durch intelligente Automatisierung.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.{md,mdx}")),
    customData: `<language>de-DE</language>`,
  });
}
