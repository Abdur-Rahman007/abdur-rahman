# Validation — 7 November 2026

## Passed automated checks

- Dependency installation succeeded after normalizing the Figma-exported package names and imports.
- `npm run typecheck` passed for the full `src` tree.
- `npm test` passed: seven tests, zero failures.
- `npm run build` passed after the final responsive styling change.
- The resume PDF in `public/resume/Abdur-Rahman-CV.pdf` is byte-for-byte identical to the supplied PDF.
- The lockfile includes Windows x64 optional native dependencies used by the build tools.
- Rendered source content was checked for the original template owner’s details and excluded newer projects. The personalized source contains only supplied CV entries and supporting interface copy.

The seven tests cover static-host-safe routes; supported YouTube URL formats; invalid/unrelated video inputs; safe email-draft encoding; the eight projects and category counts; the CV-only content boundary; and preservation of test accuracy versus training accuracy labels.

## Browser checks

Chrome preview checks confirmed:

- Home, Resume, Projects, and Contact render as separate pages with active navigation.
- The original animated lettering, gradients, dark cards, rotating icons, and neural canvas remain visible.
- The base font size remains 14px.
- The supplied PDF renders in the embedded resume viewer.
- Project filters return three Software, four AI/ML, and one Graphics project.
- Project details expand and display the supplied project descriptions.
- Empty form fields trigger browser validation; whitespace-only messages trigger the application’s validation feedback.
- Mobile navigation opens and closes on navigation.
- Independent iframe viewports were checked at 375px, 320px, and 768px. These are responsive browser checks, not tests on physical phones.
- The name wraps between words on phones. The narrow video placeholder fits its card, and the header remains at the top while scrolling.
- The final Home console check returned no application warnings or errors; unrelated browser-extension messages were excluded.

## Portrait update

The supplied transparent portrait is included unchanged as `public/images/profile.png`. The About Me image loads successfully at its original 1365 × 2048 source dimensions and is displayed at its original aspect ratio in a responsive full-length portrait frame.

Browser review confirmed that the complete supplied photo is visible on desktop and in a 320px phone viewport. The displayed image retains its original aspect ratio, and the source and production copies are byte-for-byte identical to the upload.

## Remaining checks and assets

- Add your own YouTube URL and verify actual playback and full-screen behavior. URL parsing and the empty-video state were checked; your video has not yet been supplied.
- Try Download Resume on your own Windows browser. The preview browser displayed the PDF successfully, but its download-capture mechanism timed out, so a completed browser download could not be confirmed here.
- Try Open Email Draft on your own Windows computer. The remote browser restricts navigation to HTTP/HTTPS and blocked the `mailto:` handoff. The generated draft URL is covered by tests, but launching a native email application could not be verified here.
- Windows instructions were prepared; the build and automated checks ran in Linux with Node.js 24.22.1, not on your Windows machine.
- Reduced-motion behavior is implemented through Motion and canvas cleanup logic; an operating-system preference change was not exercised during browser QA.
- External GitHub/social destinations were taken from the supplied CV. Their availability was not independently verified.
- A production build is included. No public deployment was performed.

## Resume and Projects update

Resume includes education with the supplied AIUB logo, technical skills with individual icons, all eight awards and four leadership entries from the supplied screenshot, its six listed interests, and language skills at the bottom after the PDF. Language and degree details follow the original CV; the first screenshot is treated as a layout reference. Projects contains only the eight projects, with equal-height cards and highlighted View actions. Full project details open in dialogs to retain equal card heights. Old portfolio hash links remain supported.

Type checking, seven tests, and the production build pass. Browser checks found all eight desktop project cards at 476px height, with View actions on each card. The education logo loads, all 30 skill badges have icons, and Language Skills is the last resume section. The original PDF and full-length portrait remain unchanged.

The standalone updater was tested against a copy of the previous project with a local profile edit. Dry run made no changes; applying the update ran the typecheck, seven tests, and build successfully; a second application was a no-op. Profile settings, portrait, resume PDF, package.json, and package-lock.json stayed byte-for-byte unchanged. Manual rollback restored all original target files and removed new files. A simulated validation failure also restored the original files automatically. These runtime checks ran on Linux; the Windows command adapter is included for the existing Windows project.
