# Your Name — Portfolio

A clean, Apple-inspired one-page portfolio for mechanical engineering job applications.

## Files

```
portfolio/
├── index.html          ← page content (edit this first)
├── style.css            ← all styling
├── script.js             ← scroll animations + mobile menu
├── resume.pdf            ← add your resume here
└── images/
    ├── projects/          ← project photos/renders (project-01.jpg, 02, 03...)
    └── me/                 ← your headshot (me.jpg)
```

## 1. Customize the content

Open `index.html` in any text editor (VS Code recommended) and replace everything
marked `<!-- EDIT ME -->` or that looks like placeholder text:

- Your name (appears in the nav and hero)
- The one-line pitch under your name
- Each project's title, description, and tags (duplicate the `<article class="project-card">`
  block for more than 3 projects)
- The About section text and skill chips
- Your email and LinkedIn URL in the Contact section
- The copyright line in the footer

## 2. Add your images and resume

- Drop project photos/renders into `images/projects/` and update the `src="..."` paths
  in `index.html` to match your filenames.
- Drop a headshot into `images/me/me.jpg` (or update the path).
- Add your resume PDF as `resume.pdf` in the root folder (same level as `index.html`).

Tip: keep images under ~500KB each (export JPGs at ~80% quality) so the site loads fast.

## 3. Preview locally

Just double-click `index.html` to open it in a browser. For live-reloading while you
edit, you can also use the VS Code "Live Server" extension.

## 4. Publish with GitHub Pages

1. **Create a repository.** On GitHub, click **New repository**. Name it whatever you like —
   many people use `Portfolio` to match the URL pattern, but any name works.
   Keep it **Public** (GitHub Pages requires this on free accounts). Don't add a README
   (you already have one).

2. **Upload your files.** Easiest way if you're not using git from the command line:
   - Open your new repo on GitHub → click **Add file → Upload files**.
   - Drag in `index.html`, `style.css`, `script.js`, `resume.pdf`, and the whole `images/` folder.
   - Commit the changes.

   *(If you're comfortable with git instead:)*
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages.**
   - In your repo, go to **Settings → Pages** (left sidebar).
   - Under **Build and deployment → Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`, then **Save**.
   - GitHub will show a banner with your live URL after a minute or two:
     `https://YOUR-USERNAME.github.io/YOUR-REPO/`
     (if your repo is named exactly `YOUR-USERNAME.github.io`, it publishes at the
     root domain instead, e.g. `https://YOUR-USERNAME.github.io/`)

4. **Verify it looks right**, then use that link on your resume, LinkedIn, and
   job applications — just like `mstanciu98.github.io/Portfolio`.

## Updating later

Any time you edit a file and push/upload it again, GitHub Pages automatically
rebuilds the live site within a minute or two — no extra steps needed.
