# Resume and Projects update

Run the supplied Update_Portfolio.mjs file from the terminal in your existing project folder. Node.js uses only built-in modules for copying the update. Your already installed dependencies are reused.

```powershell
node "$env:USERPROFILE\Downloads\Update_Portfolio.mjs"
npm.cmd run dev
```

Stop the current development server with Ctrl+C before applying the update. The updater backs up all changed files, applies the update, runs the existing typecheck, test, and build scripts, and prints the backup location. If validation fails, it restores the original files.

The update preserves package.json, package-lock.json, node_modules, src/app/data/portfolio.ts, your portrait, and the resume PDF. The Home project link is updated with a targeted text replacement.

To review without changing files, add --dry-run. To choose a folder from elsewhere:

```powershell
node "$env:USERPROFILE\Downloads\Update_Portfolio.mjs" --project "E:\Portfolio\abdur-rahman-portfolio"
```

To restore a backup, use the exact rollback command printed by the updater. It checks that updated files have not been edited again before replacing them. --skip-checks copies/restores files without running the project scripts.

## Changes

- Resume: separate Education (AIUB logo), Technical Skills (icons), Awards & Achievements, Activities & Leadership, Certifications, Seminars & Workshops, and Interests sections above My CV. Language Skills appears below the PDF, at the bottom of the page.
- Education and languages follow the supplied CV. All award, leadership, and interest details from the new screenshot are included.
- Portfolio navigation is renamed Projects. The new route is /#/projects and older /#/portfolio links continue to work.
- All project cards have the same height. Highlighted View actions include a GitHub icon for available repositories. The Shop Management project uses a document icon and opens details because no repository URL was supplied.
- Full project descriptions open in a dialog so the cards keep their equal sizes.
