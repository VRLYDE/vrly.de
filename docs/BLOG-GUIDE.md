# VRLY Blog Guide

## Overview

The VRLY blog is a fully-featured, SEO-optimized content management system built with Astro's content collections. It includes dynamic SEO, RSS feed, tag system, search functionality, and newsletter integration.

## Key Features

- **Content Collections**: Type-safe blog posts with frontmatter validation
- **Dynamic SEO**: Automatic meta tags and structured data for each post
- **German Localization**: All UI elements in German for the target audience
- **Tag System**: Categorize posts with tags and browse by topic
- **Search**: Client-side search with Fuse.js
- **RSS Feed**: Auto-generated RSS feed for subscribers
- **Newsletter CTA**: Integrated newsletter signup forms
- **Reading Time**: Automatic calculation of reading time
- **Draft Support**: Hide posts from production with `draft: true`

## Creating Blog Posts

### 1. File Structure

Create new blog posts in `/src/content/posts/` with `.mdx` extension:

```
src/content/posts/
├── ki-automatisierung-psychotherapie-praxis.mdx
├── dsgvo-compliance-guide.mdx
└── your-new-post.mdx
```

### 2. Frontmatter Schema

Every blog post must include the following frontmatter:

```yaml
---
title: "Your Post Title" # Required, used for SEO
description: "Brief description under 160 chars" # Required, meta description
author: "Author Name" # Defaults to "VRLY Team"
authorAvatar:
  url: "/images/team/author-avatar.jpg" # Optional
  alt: "Author Name"
pubDate: 2025-01-13 # Required, YYYY-MM-DD format
updatedDate: 2025-01-15 # Optional
image:
  url: "/images/blog/hero-image.jpg" # Required
  alt: "Image description" # Required
tags: ["Tag1", "Tag2"] # Array of tags
category: "KI & Automatisierung" # One of the defined categories
featured: false # Boolean, for future featured posts section
draft: false # Boolean, true to hide from production
readingTime: 5 # Optional, in minutes (auto-calculated if omitted)
keywords: ["additional", "seo", "keywords"] # Optional
---
```

### 3. Categories

Posts must use one of these predefined categories:

- `KI & Automatisierung` - AI and automation topics
- `DSGVO & Compliance` - Data protection and legal compliance
- `Praxistipps` - Practical tips for practices
- `Technologie` - General technology topics
- `Fallstudien` - Case studies and success stories
- `News` - Company and industry news

### 4. Writing Guidelines

#### Language

- Write in German (formal "Sie" form)
- Use clear, professional language
- Avoid overly technical jargon

#### Structure

- Start with a compelling introduction
- Use clear headings (H2, H3)
- Include practical examples
- End with a clear call-to-action

#### SEO Best Practices

- Include primary keyword in title
- Use keywords naturally throughout
- Keep descriptions under 160 characters
- Use descriptive alt text for images

### 5. MDX Features

You can use MDX components in your posts:

```mdx
import { Image } from "astro:assets";
import Text from "@/components/fundations/elements/Text.astro";

<Image src="/images/example.jpg" alt="Example" width={800} height={400} />

<Text variant="textLG" class="text-vrly-blue-600">
  Highlighted text
</Text>
```

## Managing Tags

Tags are automatically extracted from all posts. To add a new tag:

1. Simply add it to a post's `tags` array
2. It will automatically appear in:
   - Tag cloud on blog index
   - Tag pages (`/blog/tags/[tag]`)
   - Blog search

## Images

### Image Requirements

- **Hero Images**: 1200x630px (matches Open Graph)
- **Author Avatars**: 200x200px minimum (square)
- **In-post Images**: Variable, but optimize for web

### Image Storage

Store images in:

```
public/images/
├── blog/          # Blog post images
├── team/          # Author avatars
└── og/            # Open Graph images
```

## SEO Configuration

Each blog post automatically generates:

1. **Meta Tags**

   - Title with site name suffix
   - Meta description
   - Keywords
   - Author information
   - Canonical URL

2. **Open Graph Data**

   - og:type = "article"
   - Article-specific metadata
   - Featured image

3. **Structured Data**
   - BlogPosting schema
   - Author information
   - Publisher details
   - Dates and modifications

## Newsletter Integration

The blog includes newsletter signup forms in:

- Blog index header
- Subscribe CTA component
- Tag pages

Currently, forms are frontend-only. To activate:

1. Integrate with email service (e.g., Mailchimp, ConvertKit)
2. Update form action and handling
3. Add GDPR compliance checkboxes

## RSS Feed

The RSS feed is automatically generated at `/rss.xml` and includes:

- All published posts (non-draft)
- German language declaration
- Copyright information
- TTL of 60 minutes

## Search Functionality

The blog search uses Fuse.js for fuzzy searching:

- Searches title, description, and content
- Displays top 5 results
- Accessible via search icon on blog pages

## Deployment Checklist

Before deploying new blog posts:

- [ ] Frontmatter is complete and valid
- [ ] Images are optimized and uploaded
- [ ] Post is proofread for German grammar
- [ ] SEO description is under 160 chars
- [ ] Keywords are relevant
- [ ] Links are working
- [ ] Draft status is `false` for publication
- [ ] Reading time is accurate

## Common Issues

### Build Errors

- Check frontmatter format (YAML syntax)
- Ensure required fields are present
- Verify date format (YYYY-MM-DD)
- Check category is from allowed list

### Images Not Showing

- Verify image paths start with `/`
- Ensure images exist in `public` folder
- Check image file extensions

### SEO Not Working

- Ensure `draft: false` for published posts
- Verify description length
- Check structured data in browser tools

## Future Enhancements

Planned features for the blog:

- [ ] Comment system (privacy-compliant)
- [ ] Related posts suggestions
- [ ] Author pages
- [ ] Series/collection support
- [ ] Social sharing buttons
- [ ] View count tracking
- [ ] Newsletter backend integration
