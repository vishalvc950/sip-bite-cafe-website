# Sip & Bite Cafe — Website

A modern, single-page marketing website for **Sip & Bite Cafe**, a neighborhood cafe opposite GNDU Campus in Narot Jaimal Singh, Punjab. Built with React, TypeScript, Vite and Tailwind CSS.

**Live demo:** [vishalvc950.github.io/sip-bite-cafe-website](https://vishalvc950.github.io/sip-bite-cafe-website/)

## Overview

The site presents the cafe's menu, photo gallery, story, customer reviews and contact details with an editorial, warm aesthetic inspired by specialty coffee branding. It is mobile-first, accessible and optimized for local search.

### Features

- Responsive layout (mobile, tablet, desktop) with a sticky navigation bar
- Mobile action bar for quick calling and directions
- Menu section with categories, prices and badges
- Masonry photo gallery with lightbox
- Embedded Google Map and click-to-call / directions links
- LocalBusiness structured data (schema.org) for SEO
- Open Graph and Twitter Card meta tags
- Scroll-reveal animations and smooth in-page navigation
- Skip-to-content link and visible focus states for accessibility

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Utilities | clsx, tailwind-merge |

The production build uses `vite-plugin-singlefile` to emit a single self-contained HTML file, which can be hosted on any static provider.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (ships with Node)

### Installation

```bash
git clone https://github.com/vishalvc950/sip-bite-cafe-website.git
cd sip-bite-cafe-website
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement. Open the printed local URL in a browser.

### Production build

```bash
npm run build
```

Outputs the optimized site to `dist/`. Preview the build locally with:

```bash
npm run preview
```

## Project Structure

```
.
├── index.html              # Entry HTML, meta tags, fonts, structured data
├── package.json
├── tsconfig.json
├── vite.config.ts          # Vite, React, Tailwind and single-file plugins
└── src/
    ├── main.tsx            # Application bootstrap
    ├── App.tsx             # Page composition
    ├── index.css           # Tailwind theme tokens and global styles
    ├── components/         # UI sections
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── MenuSection.tsx
    │   ├── Gallery.tsx
    │   ├── About.tsx
    │   ├── Reviews.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── MobileActionBar.tsx
    │   └── Reveal.tsx      # Scroll-reveal wrapper
    ├── data/               # Editable content
    │   ├── business.ts     # Address, phone, map links, ratings
    │   ├── menu.ts         # Menu items and categories
    │   └── gallery.ts      # Gallery images
    └── utils/
        └── cn.ts           # className merge helper
```

## Content Management

All business-facing content lives in `src/data/` and can be updated without touching components:

| File | Purpose |
| --- | --- |
| `business.ts` | Name, address, phone, Plus Code, map embed, opening hours, socials |
| `menu.ts` | Menu items — name, description, price, category, image, tags |
| `gallery.ts` | Gallery photos with captions and orientation |

### Before launch checklist

The site currently ships with clearly marked demo content. Replace the following with verified details from the owner:

- [ ] Real menu items and prices in `src/data/menu.ts` (set `demo: false`)
- [ ] Actual cafe photographs in `src/data/gallery.ts` and hero/menu images
- [ ] Confirmed opening hours in `business.ts` (`openingHours`)
- [ ] Google rating and review count (`ratingVerified: true` once confirmed)
- [ ] Verified social media profiles (`socials`)
- [ ] Favicon and Open Graph image if brand assets are available

## Deployment

Because the build produces a single HTML file, the site can be deployed to any static host:

- **Netlify** — drag-and-drop `dist/` or connect the repository (build command `npm run build`, publish directory `dist`)
- **Vercel** — import the repository with framework preset "Vite"
- **GitHub Pages** — publish `dist/` via Actions or the `gh-pages` branch
- **Traditional hosting** — upload the contents of `dist/` over FTP/SFTP

## Design Notes

- Color palette: ivory, cream, espresso, caramel and terracotta tones defined as Tailwind theme tokens in `src/index.css`
- Typography: Fraunces (display serif) and Manrope (body sans) loaded from Google Fonts
- Subtle paper-grain texture and soft shadows reinforce a tactile, editorial feel

## License

All rights reserved. Content and branding belong to Sip & Bite Cafe unless otherwise noted.
