# Shopify Partner Enablement Assets

## Overview

This repository hosts educational websites, documents, and other enablement
assets to help Shopify partners strengthen their technical skills and their
ability to propose Shopify implementation solutions.

## Website

The static website lives in `docs/` and is intended for GitHub Pages:

- `docs/index.html`: English homepage at the site root.
- `docs/ja/index.html`: Japanese version of the same content at `/ja/`, relative
  to the site root.
- `docs/assets/styles.css`: Shared styles for both languages.

Keep the English and Japanese pages equivalent in content. English is the
default language. Use relative links so both versions work under the repository's
GitHub Pages path. The `docs/.nojekyll` file enables plain static-file publishing.

GitHub Pages is not configured yet. When enabling it, select **Deploy from a
branch**, the `main` branch, and the `/docs` folder in the repository's Pages
settings.

## Git workflow

This repository uses only the `ts` remote:
`https://github.com/shopify-apac-ts/shopify-partner-enablement-assets`.

The local `main` branch tracks `ts/main`. Push changes with:

```sh
git push ts main
```

Do not add or push to a personal `origin` remote for this repository.

Unless instructed otherwise, file changes should be committed, pushed to
`ts/main`, and deployed as part of the same task. Once GitHub Pages is enabled,
pushing changes to `main` triggers publication from `docs/`; verify the deployment
after pushing. Until Pages is enabled, commits can be pushed but the website is
not yet published.
