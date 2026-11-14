# Deutli – website

Marketing website for Deutli (deutli.com), a German B1 exam preparation platform. It has three pages:

| Page | File | Live path |
| --- | --- | --- |
| Home / platform | `index.html` | `/` |
| B1 Exam Playbook (PDF) | `playbook.html` | `/playbook` |
| B1 Exam Mastery Course | `course.html` | `/course` |

Plain HTML, CSS and a few lines of JavaScript (price toggles). No build step.

Motion pieces: `deutli-motion.css` and `deutli-motion.js` hold the floating shapes (course page hero) and the interactive dot field (playbook page hero), inspired by Kokonut UI (MIT). The home page has its own motion layer inside `index.html`. Everything stops for visitors who ask their device for less motion.

## Run locally

Open `index.html` in a browser, or run `npx serve .`

## Deploy

Hosted on Vercel (project `deutli-website`) at https://www.deutli.com. Every push to `main` redeploys automatically.

Branding (colors, fonts, owl logo) comes from the Deutli Figma file: https://www.figma.com/design/4pD07O1cSsoPm5yTw6czDG/Deutli
The platform lives at https://app.deutli.com (repo maliik-ali/Deutli-App).

## Before going public

- Names, reviews, teacher profiles, academy name and pass results are placeholders in `[brackets]`.
- Prices and guarantee terms are drafts.
- Not affiliated with Goethe-Institut or telc gGmbH.
