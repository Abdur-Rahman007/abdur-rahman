# Run your portfolio in VS Code on Windows

## 1. Extract the download

Right-click `Abdur_Rahman_Portfolio.zip` and choose **Extract All**. Keep the project together in one folder, for example:

```text
E:\Portfolio\abdur-rahman-portfolio
```

You should see `package.json`, `src`, and `public` inside that folder. Keep the `dist` folder too; it is the built website. To edit or run the React source, use the steps below.

## 2. Install Node.js

If Node.js is not already installed, use a Windows installer from [nodejs.org](https://nodejs.org/en/download). Use a supported LTS version that meets the project minimum, Node.js 22.12. Node.js 24.22.1 was used for the automated checks here. Keep the installer’s option to add Node.js to PATH enabled.

Close and reopen VS Code after installation.

## 3. Open the project

In VS Code, select **File → Open Folder**, then select the folder containing `package.json`.

Select **Terminal → New Terminal**. In PowerShell, check:

```powershell
node --version
npm.cmd --version
```

If the terminal is in another folder, move into your project:

```powershell
cd "E:\Portfolio\abdur-rahman-portfolio"
```

Use the actual folder you chose if it differs from the example.

## 4. Install the project dependencies

Run this once after extracting, and again if dependency files change:

```powershell
npm.cmd ci
```

Keep the terminal open until installation finishes. A `node_modules` folder will appear. The download excludes that folder because this command installs the correct packages for your own computer.

## 5. Start the website

```powershell
npm.cmd run dev
```

Open the **Local** URL printed by Vite in your browser. It is normally `http://localhost:5173/`, but use the printed address if the port is different.

Check the Home, Resume, Projects, and Contact tabs. Try Download Resume and Open PDF, then check that Open Email Draft opens your own email application. Saving a source file updates the development preview automatically.

Leave the terminal running while using the website. Press **Ctrl+C** to stop it.

## 6. Start it again another day

Open the same folder in VS Code, open a terminal, and run:

```powershell
npm.cmd run dev
```

## 7. Your portrait and video introduction

Your portrait is already included and framed in the About Me section. The image is at `public/images/profile.png`; its setting in `src/app/data/portfolio.ts` is:

```ts
photoUrl: 'images/profile.png',
```

For the introduction, paste your own YouTube link:

```ts
youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
```

Save and check Home. Use a public or unlisted YouTube video that permits embedding. Confirm it plays inside the website before your faculty submission.

## 8. Run checks and build

```powershell
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

The build regenerates `dist/`. The preview command serves that production build, normally at `http://localhost:4173/`; use the terminal’s printed URL.

## Common problems

| Problem                                            | Fix                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `node` or `npm` is not recognized                  | Install Node.js, then close and reopen VS Code.                                            |
| PowerShell says `npm.ps1 cannot be loaded`         | Use the `npm.cmd` commands shown above.                                                    |
| `ENOENT` or no `package.json`                      | Open the extracted project folder, or `cd` into the folder containing `package.json`.      |
| A port is already in use                           | Open the alternative Local URL printed by Vite, or stop the previous server with Ctrl+C.   |
| Double-clicking `index.html` produces a blank page | Start with `npm.cmd run dev`, or serve the built `dist` folder with `npm.cmd run preview`. |
| Resume is blank on a phone                         | Use **Open PDF** or **Download Resume** on the Resume page.                                |
| The contact form does not send immediately         | It opens your email app; complete sending there, or use the direct email link.             |
| YouTube video does not play                        | Check the URL, visibility, embedding permission, and any restrictions on that video.       |

When you are ready to publish, follow `DEPLOYMENT.md`.
