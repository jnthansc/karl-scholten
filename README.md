# karl-scholten

Portfolio website for Karl Scholten built with Astro and Sanity CMS.

## Project Structure

This is a monorepo containing two main components:

- **`web/`** - Astro frontend application
  - Static site generation
  - Responsive design with mobile-first approach
  - Project showcase with infinite scroll and snap scrolling

- **`sanity-cms/`** - Sanity Studio for content management
  - Content editing interface
  - Project, About, and Imprint page management
  - Image and video asset management

## Technology Stack

### Frontend (`web/`)
- [Astro](https://astro.build) - Static site generator
- [Sanity Client](https://www.sanity.io/docs/js-client) - Headless CMS integration
- TypeScript - Type-safe development
- GROQ - Query language for Sanity

### CMS (`sanity-cms/`)
- [Sanity](https://www.sanity.io) - Headless CMS
- React - UI framework for Sanity Studio
- TypeScript - Type-safe schema definitions

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Sanity account (for CMS access)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/[username]/karl-scholten.git
cd karl-scholten
```

2. Install dependencies for both projects:
```bash
# Install web dependencies
cd web
npm install

# Install Sanity CMS dependencies
cd ../sanity-cms
npm install
```

3. Configure environment variables (if needed):
   - The web app uses Sanity project ID `1pqi6gn6` by default
   - Override with `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` environment variables

### Development

**Start the web development server:**
```bash
cd web
npm run dev
```
Visit `http://localhost:4321`

**Start the Sanity Studio:**
```bash
cd sanity-cms
npm run dev
```
Visit `http://localhost:3333`

### Building

**Build the web application:**
```bash
cd web
npm run build
```

**Preview the production build:**
```bash
cd web
npm run preview
```

## Documentation

- [Web Application README](web/README.md) - Astro frontend documentation
- [Sanity CMS README](sanity-cms/README.md) - Sanity Studio documentation

## Deployment

The web application is configured for static site deployment. Build output is generated in `web/dist/`.

For deployment instructions, see the hosting setup documentation.

## License

UNLICENSED
