# Samiul Bari — Academic Website

Vue 3 / Vue CLI academic website with GitHub Actions deployment.

## Publish
1. Create a PUBLIC repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload the **contents** of this folder to the root of that repository (not the folder itself). Keep `.github/workflows/deploy.yml`.
3. In repository **Settings → Pages**, set **Source: GitHub Actions**.
4. Commit or push the files to the `main` branch.
5. In **Actions**, check `Deploy to GitHub Pages` for build and deployment status.
6. Visit `https://YOUR_GITHUB_USERNAME.github.io/#/`.

## Local test
With Node.js installed, run `npm ci` and `npm run serve`. To verify the production bundle run `npm run build`.

## Editing
- `src/views/Home.vue`: homepage
- `src/views/About.vue`: about and skills
- `src/views/Education.vue`: academic history
- `src/views/Project.vue`: project cards
- `public/images/projects/`: project figures
- `public/CV.pdf`: PDF linked from Home
- `src/assets/Image_SamiulBari.png`: sidebar profile photo

Note: The repository is a project from an earlier academic website template. Review all remaining copy and assets before publishing. The deployment build has not been tested here against an installed node_modules folder.
