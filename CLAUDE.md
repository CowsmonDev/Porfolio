# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

This is a monorepo-shaped personal portfolio project. Only `web/` is implemented; the other top-level folders are placeholders for future work:

```
├── web/          # Next.js frontend (Tailwind + shadcn/ui) — the only active code
├── agents/       # AI/ML agents (future, currently empty)
├── backend/      # Backend services (future, currently empty)
└── shared/       # Shared utilities (future, currently empty)
```

All commands below are run from `web/`.

## Commands

```bash
cd web
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:3000)
npm run build     # production build
npm run start     # serve production build
npm run lint      # eslint
```

There is no test suite configured in this project.

## Git commits

Never add Claude/AI attribution to commits or PRs — no `Co-Authored-By: Claude`, no "Generated with Claude Code", no similar footer or trailer of any kind. Commit messages and PR descriptions must read as if written solely by the human author.

## Architecture

Next.js 16 App Router, single page app. `src/app/page.tsx` composes the entire homepage from top-level portfolio sections in order: `Header, Hero, TechStack, Projects, Journey, Contact, Footer`. All are imported from the barrel `@/components/portfolio` (`src/components/portfolio/index.ts`).

### Component organization pattern

Each portfolio section lives in its own folder under `src/components/portfolio/<section>/` and follows this convention:
- A top-level `<Section>.tsx` component that lays out the section and composes the rest.
- Sub-components broken out by responsibility, flat in the section folder (e.g. `journey/TimelineEntry.tsx`, `TimelineMilestone.tsx`, `Highlights.tsx`).
- A `shared/` folder when the section has section-local types and static data (e.g. `journey/shared/types.ts` defines `Experience`/`CareerHighlight`, `journey/shared/data.ts` holds the actual content array). `tech-stack/` follows the same shape; the smaller sections have no `shared/` at all.
- An `index.ts` barrel re-exporting the section's entry component, which is what `src/app/page.tsx` imports via `@/components/portfolio`.

Most of the tree is server components. `"use client"` appears only where something actually needs it — `Header.tsx`, `contact/ContactForm.tsx`, `hero/CodeBlock.tsx`, `hero/HeroActions.tsx`, `projects/alquilapoint/Calendar.tsx`, `projects/alquilapoint/FeaturedProject.tsx`. Don't add the directive to a new section by default.

`projects/` is the one section split further, by project rather than by responsibility, because each project owns several unrelated mock-UI panels:
- `projects/alquilapoint/` — `FeaturedProject.tsx` plus its panels (`Calendar`, `Chat`, `Architecture`, `Stack`, `EngineeringStats`). The folder carries the project name, so the components don't repeat it.
- `projects/nexorh/` — `SecondaryProject.tsx` and its `Chat.tsx`.
- `projects/shared/` — presentational primitives used by both projects (`BrowserWindowChrome`, `ChatBubble`, `TechTag`). Note this is components, unlike the `shared/` folders elsewhere which hold types and data.

The per-project subfolders deliberately have no `index.ts`; only `Projects.tsx` imports across the boundary, so a barrel would add indirection for two lines.

When adding a new section, follow the same folder shape rather than flattening files into one directory — but see the caveat below before nesting further.

**Caveat:** this codebase was originally generated in February 2026 with an early AI coding agent (Antigravity), during the initial wave of AI-assisted scaffolding tools. Treat the existing folder/component structure as a starting convention to stay consistent with, not as a proven or deliberately-designed pattern — it may contain unnecessary nesting or indirection that nobody chose on purpose. Don't propagate an existing structure into new code purely because "that's what the codebase already does." Match it when it's genuinely reasonable for the size of the section; simplify (e.g. skip a `components/` subfolder or its `index.ts` barrel) when a section only has one or two sub-components and the extra nesting adds no value.

### UI primitives

`src/components/ui/` contains shadcn/ui primitives (`new-york` style, Tailwind v4, `neutral` base color, no class prefix). Path aliases (`@/components`, `@/components/ui`, `@/lib`, `@/hooks`) are defined in `components.json` and mirrored in `tsconfig.json` as `@/*` → `./src/*`. Use the shadcn CLI conventions (Radix-based, `cva` for variants, `cn()` from `@/lib/utils`) when adding new primitives rather than hand-rolling styling.

### Theming

Dark/light theme is handled by `next-themes` via `src/components/theme-provider.tsx`, wired in `src/app/layout.tsx` with `attribute="class"` and `defaultTheme="dark"`. `suppressHydrationWarning` is set on `<html>` — required for the theme provider to avoid hydration mismatches; don't remove it.

### Contact form / email

`src/components/portfolio/contact/actions.ts` is a Next.js Server Action (`"use server"`) that sends email via Resend (`resend` package). It reads `RESEND_API_KEY` from the environment and sends to a hardcoded recipient. When touching this file, keep the recipient/from address and field validation behavior in mind — it's the site's only external side effect.

### Fonts

`Inter` and `JetBrains_Mono` are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono` (names kept from the original Geist scaffold), applied globally in the `<body>` className.
