# Copilot Instructions

## Project Overview

This is a personal portfolio website for Vincenzopio Amendola, a Frontend Engineer based in Napoli, Italy. It is a static single-page application (SPA) deployed to GitHub Pages.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build tool**: Vite 6
- **Styling**: TailwindCSS v4 (integrated via the `@tailwindcss/vite` plugin — no separate `tailwind.config.js` needed)
- **Animations**: `motion/react` (Motion, formerly Framer Motion)
- **Icons**: `lucide-react`
- **Deployment**: GitHub Actions → GitHub Pages (`dist/` directory)

## Project Structure

```
src/
  components/   # Reusable UI primitives (Button, Card, Container, Section, ThemeToggle)
  sections/     # Full-page sections rendered by App.tsx (Navbar, Hero, Skills, Projects, Hobbies, Footer)
  data/         # Static data files (hobbies.ts, projects.ts, skills.ts)
  types.ts      # Shared TypeScript interfaces (Skill, Project, Hobby)
  App.tsx       # Root component; manages dark/light theme state
  main.tsx      # React entry point
  index.css     # Global styles and Tailwind base layer
public/         # Static assets served at root (images/, assets/)
.github/
  workflows/
    deploy.yml  # CI/CD: builds on push to main and deploys to GitHub Pages
```

## Coding Conventions

- **TypeScript**: Strict mode is enabled. Always type props with interfaces. Never use `any`.
- **Components**: Use named function expressions exported with `export const`. Keep each component in its own file.
- **Styling**: Use Tailwind utility classes directly on JSX elements. Avoid inline `style` props unless strictly necessary. Support both light and dark modes using `dark:` variants.
- **Animations**: Wrap animated elements with `motion.*` from `motion/react`. Use `initial`, `animate`, and `transition` props for consistency.
- **Data**: Keep content (projects, skills, hobbies) in `src/data/` as typed arrays exported by name. Import them into the relevant section component.
- **No test framework**: The repository does not currently have a testing setup. Do not add one unless explicitly requested.

## Common Commands

```bash
# Install dependencies
npm ci

# Start dev server (http://localhost:3000)
npm run dev

# Type-check (acts as the linter)
npm run lint

# Production build (outputs to dist/)
npm run build
```

## Notes

- `process.env.GEMINI_API_KEY` is injected at build time via Vite's `define` option (see `vite.config.ts`) for any Gemini AI features (e.g., chatbot or AI-powered sections). Copy `.env.example` to `.env` and fill in your key to enable them locally.
- The `@` alias resolves to the repository root, not `src/`.
- HMR can be disabled by setting `DISABLE_HMR=true` in the environment (used in some AI-assisted editing scenarios).
