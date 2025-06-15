import alpinejs from "@astrojs/alpinejs";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import AstroPWA from "@vite-pwa/astro";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { defaultLocale, locales, siteTitle, siteUrl } from "./site.config";

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	output: "hybrid",
	adapter: cloudflare({
		imageService: "compile",
		experimental: {
			manualChunks: ["sharp"],
		},
	}),
	compressHTML: true,
	i18n: {
		defaultLocale: defaultLocale,
		locales: locales,
		routing: {
			prefixDefaultLocale: false,
		},
	},
	redirects: {
		"/admin": "/keystatic",
	},
	vite: {
		define: {
			__DATE__: `'${new Date().toISOString()}'`,
		},
	},
	integrations: [
		alpinejs(),
		tailwind({
			// Base style is applied on the file global.css
			applyBaseStyles: false,
		}),
		sitemap(),
		icon(),
		react(),
		markdoc(),
		keystatic(),
		robotsTxt({
			policy: [{ userAgent: "*", allow: "/" }],
		}),
		AstroPWA({
			mode: import.meta.env.PROD ? "production" : "development",
			base: "/",
			scope: "/",
			includeAssets: ["favicon.svg"],
			registerType: "autoUpdate",
			injectRegister: false,
			manifest: {
				name: siteTitle,
				short_name: siteTitle,
				theme_color: "#ffffff",
			},
			pwaAssets: {
				config: true,
			},
			workbox: {
				navigateFallback: "/",
				globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
				globIgnores: ["**/_worker.js/**/*", "_worker.js"],
				navigateFallbackDenylist: [/^\/keystatic/, /^\/api/],
				skipWaiting: true,
				maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
			},
			devOptions: {
				enabled: false,
				navigateFallbackAllowlist: [/^\//],
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			},
		}),
	],
});
