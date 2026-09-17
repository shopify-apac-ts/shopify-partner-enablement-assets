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
- `docs/_common/styles.css`: Shared styles for both languages.

Store shared website files in `docs/_common/`. Reserve `docs/assets/` for reusable
educational resources.

Keep the English and Japanese pages equivalent in content. English is the
default language. Use relative links so both versions work under the repository's
GitHub Pages path. The `docs/.nojekyll` file enables plain static-file publishing.

GitHub Pages uses **Deploy from a branch**, with the `main` branch and the `/docs`
folder selected in the repository's Pages settings.

- [English website](https://shopify-apac-ts.github.io/shopify-partner-enablement-assets/)
- [Japanese website](https://shopify-apac-ts.github.io/shopify-partner-enablement-assets/ja/)

## Disclaimer

This site is not official Shopify documentation. The maintainers do not accept responsibility for the accuracy, completeness, or consequences of using this content. Use it at your own discretion as supplemental material for understanding Shopify concepts and workflows. Content may change without notice.
