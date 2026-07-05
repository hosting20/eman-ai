# eman automation — Landing Page (v2)

Arabic-first (RTL) landing page for eman automation, implementing the **v2 warm cream / terracotta** design from `emanAL/design_handoff_landing_redesign`.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (design tokens in `tailwind.config.js`)
- lucide-react icons
- Fonts: Alexandria (headings) + IBM Plex Sans Arabic (body), via Google Fonts

## Structure

- `src/siteConfig.ts` — **all copy, links and options** live here; components only render it.
- `src/components/` — one component per section: Navbar, Hero, HeroMockWindow, Services, Approach (timeline), Products, Faq, Contact, Footer.
- `src/index.css` — page background treatment (cream + radial washes + 56px grid).

## Commands

```
npm install
npm run dev      # dev server on :5173
npm run build    # type-check + production build to dist/
```

## Remaining production wiring (per handoff README)

- Contact form (`src/components/Contact.tsx` → `submit`) currently only swaps to the success state client-side. Wire it to a form service / API route that forwards to `emanautomation1@gmail.com`.
- Email-marketing loop (MailerLite/Brevo welcome automation for the free-guide PDF) is not part of this site build.
