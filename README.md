# Abdur Rahman — Software Engineering & AI/ML Portfolio

A personalized React portfolio based on the supplied Figma Make source. The original dark theme, gradients, neural canvas, animated lettering, entrance effects, card hovers, and rotating rings are retained. Portfolio facts come from the supplied CV, Markdown, and resume reference screenshots.

**Start with [START_HERE_WINDOWS.md](START_HERE_WINDOWS.md) for the full VS Code and Windows guide.**

## Pages

Resume now includes education with the supplied AIUB logo, technical skills with icons, all awards/activities/interests from the new screenshot, certifications, seminars, the original PDF, and Language Skills at the bottom. The first screenshot is a layout reference; education and language facts come from the supplied CV.

| Page     | URL           | Contents                                                                                              |
| -------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| Home     | `/#/`         | Animated introduction, short bio, supplied portrait, YouTube introduction placeholder                 |
| Resume | `/#/resume` | Education, technical skills, achievements, leadership, certifications, workshops, interests, PDF, and language skills |
| Projects | `/#/projects` | Eight equal-sized project cards, category filters, highlighted View links, and project detail dialogs |
| Contact  | `/#/contact`  | Contact links and an email-draft form                                                                 |

Hash-based navigation keeps direct links and refreshes working on ordinary static hosts, including project subfolders.

## Quick start

Use Node.js 22.12 or newer. Validation in this workspace used Node.js 24.22.1.

```bash
npm ci
npm run dev
```

On Windows PowerShell, `npm.cmd` is also available and avoids script execution-policy issues.

```powershell
npm.cmd ci
npm.cmd run dev
```

Use the local URL printed in the terminal. Stop the server with Ctrl+C.

## Checks and production build

```bash
npm run typecheck
npm test
npm run build
npm run preview
```

`dist/` is the production website. See [DEPLOYMENT.md](DEPLOYMENT.md) before uploading it.

## Edit your content

The main content file is **`src/app/data/portfolio.ts`**. It contains the profile, contact links, education, projects, skills, workshops, awards, certifications, and activities. `docs/CV_SOURCE.md` is an unchanged reference copy of the uploaded Markdown.

### Your portrait

Your supplied transparent PNG is included at `public/images/profile.png` and configured as `photoUrl: 'images/profile.png'` in `src/app/data/portfolio.ts`.

The complete picture appears in a tall, softly glowing frame in About Me. The image keeps its original proportions, transparency, and full pose. The `.portrait-image` rule in `src/styles/globals.css` scales it to the available width without cropping.

To use another photo later, replace the image or update `photoUrl`.

### Add your YouTube introduction

In `src/app/data/portfolio.ts`, change `youtubeUrl: ''` to your own YouTube watch or share link. For example:

```ts
youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
```

The site extracts the video ID and displays an embedded player inside Home. Watch links, `youtu.be` share links, shorts, live links, embed links, and direct 11-character video IDs are supported. Keep embedding enabled on the YouTube video. Until a valid link is supplied, the introduction placeholder remains visible. Your own video and playback still need checking after you provide it.

### Replace your resume

Replace `public/resume/Abdur-Rahman-CV.pdf` with your updated PDF, keeping the same filename. The supplied PDF has been copied without altering its contents. The three-page label is in `src/app/pages/Resume.tsx`; update it if your new CV has a different page count.

### Projects and skills

All eight supplied CV projects are included. Software projects appear first, followed by ML/NLP and graphics work. The Shop Management System has no repository URL in the CV, so it has project details without a GitHub button. Add a `github` field when its link is available.

Skills use animated badges, because the CV provides no self-assessed proficiency percentages. Existing test accuracy and training accuracy claims retain their original labels.

### Contact form

The form opens the visitor’s email application with a prefilled draft addressed to the CV email. The visitor completes sending in that application. It does not submit messages to a server. Direct email, telephone, GitHub, and LinkedIn links are also provided.

## Faculty checklist

| Requirement                                                      | Location                    | Status                              |
| ---------------------------------------------------------------- | --------------------------- | ----------------------------------- |
| Photo and short bio                                              | Home → About Me             | Complete: supplied portrait and bio |
| Video introduction playing in the website                        | Home → A Short Introduction | Embed ready; add your YouTube link  |
| Resume | `/#/resume` | Education, technical skills, achievements, leadership, certifications, workshops, interests, PDF, and language skills |
| Skills, projects, activities, and experience on another page/tab | Resume / Projects                   | Complete using the supplied CV      |

## Project structure

- `src/app/App.tsx`: four-page composition and route changes.
- `src/app/components/`: original and customized visual sections, navigation, footer, video area, and shared UI.
- `src/app/data/portfolio.ts`: editable portfolio facts and asset settings.
- `src/app/lib/`: route, video, asset-path, and email-draft helpers.
- `src/app/pages/Resume.tsx`: embedded PDF and download actions.
- `src/styles/`: retained Tailwind 4 theme and global styles, with the original 14px base font size.
- `public/`: resume PDF, favicon, and your supplied portrait.
- `tests/utils.test.ts`: focused tests for routing, YouTube input, email encoding, and CV content boundaries.
- `qa/responsive.html`: development-only phone/tablet preview fixture. Open `/qa/responsive.html` on the development server to inspect independent iframe viewports. It is not a production build entry.
- `docs/CV_SOURCE.md`: supplied Markdown reference.

## Accessibility and compatibility

The website includes labeled form fields, named icon links, a skip link, keyboard-accessible project details, mobile navigation, and reduced-motion support. The neural canvas stops animating for reduced-motion users and cancels its animation frame when unmounted. On browsers that cannot embed PDFs, Resume provides open and download alternatives.

## Original source and credits

Original supplied template: [AI Engineer Portfolio Website (Community)](https://www.figma.com/design/dA10qRil0v17fCZsiWyWaM/AI-Engineer-Portfolio-Website--Community-.).

Original third-party attribution files are retained in `ATTRIBUTIONS.md` and `src/app/Attributions.md`. The reusable UI toolkit remains in the project. The original ZIP is separate from this customized copy.

## Documentation references

- [Vite 6: production build](https://v6.vite.dev/guide/build)
- [Vite 6: static deployment](https://v6.vite.dev/guide/static-deploy)
- [YouTube embedded player documentation](https://developers.google.com/youtube/player_parameters)
- [Node.js download](https://nodejs.org/en/download)
