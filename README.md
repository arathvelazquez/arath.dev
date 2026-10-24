# Personal site

Personal project for my own web page (https://arath.dev) with React, Vite and TailwindCSS, hosted in AWS with Route 53, CloudFront and S3 (also published to GitHub Pages).

## Development

Requires Node.js 20.19+.

```
npm install
npm start        # dev server
npm run build    # production build into build/
npm run preview  # serve build/ locally
```

Styles use Tailwind CSS 4; the theme (colors, fonts, breakpoints) lives in `src/index.css` under `@theme`.

Note: `~/.npmrc` has `os = "linux"`, which makes npm skip the macOS native binaries Vite and Tailwind need. The project `.npmrc` overrides it with `os=darwin`.

Files that are not published live in `private/` with the same path they had under `public/` (unused screenshots, logos, the AV avatar). `private/FS_ArathVelazquez_CV.pdf` is ignored by git.

## Deployment

`npm run deploy` builds the site and then:

1. Syncs `build/` to the `s3://arath.dev` bucket with `--delete`, so files no longer in `build/` are removed. `shared/` (the CV) and `.DS_Store` files are excluded. Uses the `default` AWS CLI profile.
2. Invalidates `/*` in CloudFront (also with the `default` profile) (distribution `E1X45QNA77TKIT`, alias `arath.dev`). `www.arath.dev` is a separate bucket/distribution that redirects to `arath.dev`.
3. Publishes `build/` to the `master` branch of the `webpage` remote (`arathvelazquez.github.io`) with gh-pages.

## Git remotes

| Remote | Repo | Contents |
|---|---|---|
| `origin` | `arath.dev.git` | Source code. Push your commits here: `git push origin master` |
| `webpage` | `arathvelazquez.github.io.git` | Built site for GitHub Pages. Only `npm run deploy` writes to it; never push source code here. |
