# Shopify Partner Enablement Assets

## Overview

This repository hosts educational websites, documents, and other enablement
assets to help Shopify partners strengthen their technical skills and their
ability to propose Shopify implementation solutions.

## Website

The static website lives in `docs/` and is published with GitHub Pages:

- `docs/index.html`: English homepage at the site root.
- `docs/ja/index.html`: Japanese version of the same content at `/ja/`, relative
  to the site root.
- `docs/assets/styles.css`: Shared styles for both languages.

Keep the English and Japanese pages equivalent in content. English is the
default language. Use relative links so both versions work under the repository's
GitHub Pages path. The `docs/.nojekyll` file enables plain static-file publishing.

GitHub Pages uses **Deploy from a branch**, with the `main` branch and the `/docs`
folder selected in the repository's Pages settings.

- [English website](https://shopify-apac-ts.github.io/shopify-partner-enablement-assets/)
- [Japanese website](https://shopify-apac-ts.github.io/shopify-partner-enablement-assets/ja/)

## Git workflow

This repository uses only the `ts` remote:
`https://github.com/shopify-apac-ts/shopify-partner-enablement-assets`.

Use `junichiokamuraSP <junichi.okamura@shopify.com>` as both the author and
committer for this repository. This overrides the personal commit identity used
in other repositories. Configure it locally after cloning:

```sh
git config --local user.name junichiokamuraSP
git config --local user.email junichi.okamura@shopify.com
```

The local `main` branch tracks `ts/main`. Push changes with:

```sh
git push ts main
```

Do not add or push to a personal `origin` remote for this repository.

Unless instructed otherwise, file changes should be committed, pushed to
`ts/main`, and deployed as part of the same task. Pushing changes to `main` triggers
publication from `docs/`; verify the deployment after pushing.
