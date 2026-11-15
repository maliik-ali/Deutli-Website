# Deutli – website

Marketing site for Deutli (deutli.com), the German B1 exam-prep platform. Next.js (App Router) + Tailwind, with [Magic UI](https://magicui.design) components for motion (`components/ui`).

| Page | Source | Path |
| --- | --- | --- |
| Landing page | `app/page.tsx`, `components/landing/*` | `/` |
| B1 Exam Playbook (hidden from nav) | `public/playbook.html` | `/playbook` |
| B1 Exam Mastery Course (hidden from nav) | `public/course.html` | `/course` |

The Course, Playbook and Speaking club are intentionally not linked from the landing page for now. The Course and Playbook pages still resolve and are `noindex`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Vercel project `deutli-website` (https://www.deutli.com). Pushes to `main` redeploy automatically.

Platform app: https://app.deutli.com (repo maliik-ali/Deutli-App).

## Before going public

- Prices and the 14-day refund terms are drafts (PKR / EUR, Free and Pro).
- No testimonials, user counts or ratings are shown on purpose. Add real ones (with permission) when available.
- Not affiliated with Goethe-Institut or telc gGmbH.
