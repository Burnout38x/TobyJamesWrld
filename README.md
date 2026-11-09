# James Akintunde — AI & Software Engineering Portfolio

Responsive editorial portfolio with an animated canvas sculpture, four project case studies, an interactive five-stage agent workflow, experience, contact links, and a downloadable CV.

## Develop

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

## Deploy to Vercel

Import `Burnout38x/TobyJamesWrld` in Vercel. Framework: **Vite**. Root directory: repository root. Build command: `npm run build`. Output: `dist`. No environment variables or paid services are needed.

Alternatively, from a signed-in Vercel CLI:

```sh
npx vercel --prod
```

A Git-connected project deploys future changes automatically. Use Vercel's deployment history to roll back to a previous deployment if necessary. Verify the public home page, a project dialog, the mobile menu, and the CV after publishing. No database or server-side backup is needed; Git history is the source backup.

## Update content

- `src/data.js`: project titles, descriptions, outcomes, metrics, and case-study links. Add an entry with the existing schema to add a project.
- `src/main.jsx`: introduction, contact details, career timeline, skills, and page composition.
- `src/styles.css`: colors, typography, breakpoints, and motion.
- `src/Orb.jsx`: original canvas particle animation, paused offscreen and when the tab is hidden.
- `public/james-akintunde-resume.pdf`: replace to update the downloadable CV.
- `public/og-image.png`: social sharing image.

The workflow is an **illustrative walkthrough**, not live model execution. Professional projects are summarized from the supplied CV; no proprietary source, internal screenshots, prompts, or API keys are included. Metrics are user-reported rather than independently benchmarked. The ~88% reduction refers to always-on prompt size, not total API spend.

Fonts are self-hosted via Fontsource (DM Sans and Instrument Serif, SIL OFL); framework and icons use permissive licenses. No analytics, forms backend, model calls, or external font requests are included. Motion respects the system's reduced-motion preference, with an additional ambient-animation pause control. Contact opens an email client; Copy email uses the browser clipboard with a mailto fallback.

## Brand and portrait

`BRAND.md` documents the portrait-led navy, ivory, slate, and brass palette, type choices, motion behavior, and references. `public/james-akintunde.jpg` is the original user-provided portrait, displayed unchanged.
