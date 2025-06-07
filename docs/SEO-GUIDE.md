# VRLY SEO Guide

## Overview

VRLY's SEO implementation is designed to maximize visibility for psychotherapists in Hannover searching for AI-powered workflow automation solutions. The system is built with local SEO optimization, GDPR compliance messaging, and structured data for rich search results.

## SEO Configuration

### Central Configuration File

All SEO defaults are managed in `/src/config/seo.ts`:

- **Site-wide defaults**: Title, description, keywords, social media
- **Page-specific configurations**: Optimized metadata for each page
- **Structured data templates**: Organization, LocalBusiness, and Service schemas

### Key Components

1. **Seo.astro Component** (`/src/components/fundations/head/Seo.astro`)

   - Handles all SEO meta tags using @astrolib/seo
   - Accepts dynamic props for page-specific customization
   - Includes structured data (JSON-LD) injection
   - Manages Open Graph and Twitter Card data

2. **Meta.astro Component** (`/src/components/fundations/head/Meta.astro`)
   - Handles non-SEO meta tags (charset, viewport, etc.)
   - Security headers and performance optimizations
   - Favicon configuration

## Usage in Pages

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { pageSEO, seoConfig } from "@/config/seo";

// Optional: Add page-specific structured data
const pageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  // ... your structured data
};
---

<BaseLayout
  title={pageSEO.yourPage.title}
  description={pageSEO.yourPage.description}
  keywords={pageSEO.yourPage.keywords}
  jsonLd={pageStructuredData}
>
  <!-- Your page content -->
</BaseLayout>
```

## SEO Best Practices for VRLY

### 1. Title Tags

- Keep under 60 characters
- Include location "Hannover" for local SEO
- Use action words: "automatisiert", "optimiert", "spart Zeit"
- Format: `[Benefit/Service] für Psychotherapeuten in Hannover | VRLY`

### 2. Meta Descriptions

- 150-160 characters optimal
- Include call-to-action
- Mention DSGVO-compliance
- Use keywords naturally

### 3. Keywords Strategy

Primary keywords:

- Psychotherapeut Hannover
- KI Automatisierung Psychotherapie
- DSGVO Praxissoftware
- Workflow Automation Therapeuten
- Digitalisierung Psychotherapiepraxis

Local modifiers:

- "in Hannover"
- "Hannover und Umgebung"
- "Region Hannover"

### 4. Structured Data

We implement several schema types:

- **Organization**: Company information
- **LocalBusiness**: Local SEO optimization
- **ProfessionalService**: Service categorization
- **Service**: Individual service offerings
- **WebSite**: Site-wide search functionality

### 5. Open Graph Images

- Size: 1200x630px
- Include VRLY branding
- Clear, readable text
- Professional appearance
- Stored in `/public/og-image-*.jpg`

## Technical SEO Checklist

- [x] XML Sitemap (`/sitemap-index.xml` via @astrojs/sitemap)
- [x] Robots.txt with sitemap reference
- [x] Canonical URLs (automatic via Astro)
- [x] Language declaration (`lang="de"`)
- [x] Mobile-friendly meta viewport
- [x] HTTPS enforcement (via Cloudflare)
- [x] Performance optimization (lazy loading, preconnect)
- [x] Structured data validation
- [ ] Schema markup testing (use Google's Rich Results Test)
- [ ] Core Web Vitals optimization

## Local SEO Optimization

1. **NAP Consistency** (Name, Address, Phone)

   - Ensure consistent business information across all pages
   - Update phone number in `/src/config/seo.ts`

2. **Local Keywords**

   - Target "Psychotherapeut Hannover" variations
   - Include neighborhood names if relevant
   - Use "in Ihrer Nähe" phrases

3. **Google My Business**
   - Claim and optimize GMB listing
   - Use consistent NAP from website
   - Add VRLY services categories

## Content SEO Guidelines

1. **Headers (H1-H6)**

   - One H1 per page
   - Use keywords in H2-H3 naturally
   - Logical hierarchy

2. **Internal Linking**

   - Link to services from relevant content
   - Use descriptive anchor text
   - Create topic clusters

3. **Image Optimization**
   - Use descriptive filenames
   - Add alt text focusing on context
   - Compress images (WebP preferred)

## Monitoring and Updates

1. **Regular Reviews**

   - Check Google Search Console monthly
   - Monitor local search rankings
   - Update keywords based on trends

2. **Content Updates**

   - Keep service descriptions current
   - Add new testimonials regularly
   - Update blog with relevant content

3. **Technical Maintenance**
   - Validate structured data quarterly
   - Check for crawl errors
   - Monitor page speed scores

## Adding New Pages

When creating new pages:

1. Add page configuration to `/src/config/seo.ts`
2. Use appropriate structured data
3. Follow title/description guidelines
4. Include relevant keywords
5. Test with SEO preview tools

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Local SEO Guide](https://moz.com/learn/seo/local)
