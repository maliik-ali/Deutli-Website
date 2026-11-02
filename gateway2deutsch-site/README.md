# Gateway2Deutsch – website demo

Static demo website for Gateway2Deutsch, a German B1 exam preparation platform. It has three pages:

| Page | File | Live path |
| --- | --- | --- |
| Home / platform | `index.html` | `/` |
| B1 Exam Playbook (PDF) | `playbook.html` | `/playbook` |
| B1 Exam Mastery Course | `course.html` | `/course` |

Plain HTML, CSS and a few lines of JavaScript (price toggles). No build step.

## Run locally

Open `index.html` in a browser, or run `npx serve .`

## Deploy

Hosted on Vercel. Import this repo at vercel.com/new with framework preset **Other** and no build command. Every push to `main` redeploys automatically.

## Before going public

- Names, reviews, teacher profiles, academy name and pass results are placeholders in `[brackets]`.
- Prices and guarantee terms are drafts.
- Not affiliated with Goethe-Institut or telc gGmbH.
