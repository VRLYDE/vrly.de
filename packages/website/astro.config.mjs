import { defineConfig, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "cloudflare",
  }),

  output: "server",

  server: { port: 1312 },

  site: "https://vrly.de",

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["node:fs/promises", "node:path", "node:url", "node:crypto"],
    },
  },

  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },

  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },

  integrations: [
    sitemap(),
    mdx(),
    webmanifest({
      name: "VRLY - KI & Workflows für Psychotherapeuten",
      short_name: "VRLY",
      description:
        "Spezialisierte KI-gestützte Workflow-Automatisierung und DSGVO-konforme Digitalisierungslösungen exklusiv für Psychotherapeut:Innen in Hannover. Mehr Zeit für Ihre Patienten durch intelligente Automatisierung.",
      start_url: "/",
      scope: "/",
      theme_color: "#1D76DB",
      background_color: "#F0F4F8",
      display: "standalone",
      orientation: "portrait-primary",
      lang: "de-DE",
      dir: "ltr",
      categories: [
        "healthcare",
        "productivity",
        "business",
        "automation",
        "workflow",
      ],
      icon: "src/assets/logo.svg",
      icons: [
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "icons/icon-192x192-maskable.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon-512x512-maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      prefer_related_applications: false,
      related_applications: [],
      shortcuts: [
        {
          name: "Praxis-Anfragen-Autopilot",
          short_name: "Autopilot",
          description: "Automatisierte Bearbeitung von Patientenanfragen",
          url: "/services/praxis-anfragen-autopilot",
          icons: [
            {
              src: "icons/shortcut-autopilot.png",
              sizes: "96x96",
            },
          ],
        },
        {
          name: "Kontakt",
          short_name: "Kontakt",
          description: "Kostenlose Erstberatung vereinbaren",
          url: "/contact",
          icons: [
            {
              src: "icons/shortcut-contact.png",
              sizes: "96x96",
            },
          ],
        },
      ],
    }),
  ],
});
