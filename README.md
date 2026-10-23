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

1. Syncs `build/` to the `s3://arath.dev` bucket, skipping `.DS_Store` files (needs AWS CLI credentials).
2. Invalidates `/*` in CloudFront (distribution `E1X45QNA77TKIT`, alias `arath.dev`). `www.arath.dev` is a separate bucket/distribution that redirects to `arath.dev`.
3. Publishes `build/` to the `master` branch of `arathvelazquez.github.io` with gh-pages.

To update git repository: git push webpage

React app: arathvelazquez.github.io.git
Code: arath.dev.git
