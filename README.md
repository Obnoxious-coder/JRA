# JRA Law Firm Website

A modern, SEO-friendly website for JRA Law Firm built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **SEO Optimized**: Built-in static site generation, sitemap, robots.txt, and structured data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Blog System**: Markdown-based blog with easy content management
- **Modern UI**: Professional design suitable for a law firm
- **Performance**: Optimized with Next.js static generation and image optimization

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Markdown** for blog posts (gray-matter, remark)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
JRA/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/             # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── BlogCard.tsx        # Blog post card
│   └── BlogPost.tsx        # Blog post renderer
├── content/                # Content files
│   └── blog/               # Blog markdown files
├── lib/                    # Utility functions
│   ├── blog.ts             # Blog utilities
│   └── utils.ts            # Helper functions
└── public/                 # Static assets
```

## Adding Blog Posts

To add a new blog post:

1. Create a new markdown file in `content/blog/` directory
2. Use the following frontmatter format:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
author: "Author Name"
excerpt: "Brief description of the post"
tags: ["tag1", "tag2"]
---

Your blog post content in markdown...
```

3. The post will automatically appear on the blog listing page

## Building for Production

```bash
npm run build
npm start
```

## SEO Features

- Dynamic metadata for each page
- Structured data (JSON-LD) for organization and articles
- Auto-generated sitemap
- Robots.txt configuration
- Open Graph and Twitter Card support
- Semantic HTML

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The current theme uses:
- Primary colors: Professional blue tones
- Accent colors: Red tones for highlights

### Content

- Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
- Modify service offerings in `app/services/page.tsx`
- Update team information in `app/about/page.tsx`

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service** (after running `npm run build`)

## License

Private - JRA Law Firm
