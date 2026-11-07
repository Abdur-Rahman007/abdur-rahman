# Prepare and deploy the static portfolio

The project builds to **`dist/`**. It has no required backend or environment variables. Hash routes work on standard static hosting without route-rewrite rules. Relative asset paths support deployment at the domain root or within a project subfolder.

## Before publishing

1. Add your YouTube introduction in `src/app/data/portfolio.ts`; your portrait is already included.
2. Check that all displayed CV facts and contact links are the ones you want to publish.
3. Check the supplied resume PDF and replace it if you have a newer version.
4. Play your own embedded video, open/download the resume, and check the layout on your own phone.

## Build on Windows

In the project folder:

```powershell
npm.cmd ci
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

Visit the printed preview URL and check all four tabs. Close the preview with Ctrl+C when finished.

## Option A: upload the finished website

Use a static host’s manual deployment flow, such as Netlify’s manual upload flow described in the [Vite 6 deployment guide](https://v6.vite.dev/guide/static-deploy#netlify).

Upload **the contents of `dist/`**, or the `dist` folder when the host accepts a folder. `index.html` must be at the root of the uploaded website. Include the `assets`, `resume`, and other files in that folder.

The source ZIP and the project’s root `index.html` are development inputs. The complete built website is inside `dist/`.

## Option B: build from a Git repository

Push the project source to your own repository, then import it into a static hosting provider. Keep `node_modules` and `dist` out of Git; `.gitignore` already covers them.

| Hosting setting          | Value                                                                  |
| ------------------------ | ---------------------------------------------------------------------- |
| Framework                | Vite / React                                                           |
| Root directory           | Folder containing `package.json`                                       |
| Install command          | `npm ci`                                                               |
| Build command            | `npm run build`                                                        |
| Publish/output directory | `dist`                                                                 |
| Node.js                  | A compatible supported version, minimum 22.12; validation used 24.22.1 |
| Environment variables    | None required                                                          |

Provider-specific steps are covered in [Vite’s static deployment guide](https://v6.vite.dev/guide/static-deploy).

## After deployment

- Open the deployed URL and navigate to each tab.
- Open a direct `/#/resume` link and refresh it.
- Check that the PDF opens and downloads.
- Check your portrait and play the YouTube video.
- Verify the GitHub, LinkedIn, Codeforces, LeetCode, and email links you use.
- Test on your own phone and desktop.

When you later update the content, rebuild and upload the new `dist`, or push the change to your connected repository.

## What is ready and what still needs your assets

The four pages, CV content, resume document, filters, project details, contact draft flow, navigation, accessibility support, and build configuration are implemented. Your supplied portrait is included and framed in About Me. The YouTube introduction remains a replaceable placeholder until its link is supplied. The site has not been published by this task.
