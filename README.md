# Shopify Partner Enablement Assets

## Overview

This repository hosts educational websites, documents, and other enablement
assets to help Shopify partners strengthen their technical skills and their
ability to propose Shopify implementation solutions.

## Website

The static website lives in `docs/` and is published with GitHub Pages:

- `docs/index.html` and `docs/ja/index.html`: English and Japanese site directories.
- `docs/seminars/index.html` and `docs/seminars/ja/index.html`: Seminar directories.
- `docs/seminars/<seminar>/index.html` and
  `docs/seminars/<seminar>/ja/index.html`: Seminar summaries and resource links.
- `docs/seminars/<seminar>/`: Shared seminar files, including slide PDFs and
  assessment worksheets. Both language versions link to the same files.
- `docs/assets/index.html` and `docs/assets/ja/index.html`: Reusable resource
  directories for materials that are not tied to a specific event.
- `docs/_common/styles.css`: Shared styles for both languages.

Store shared website files in `docs/_common/`. Reserve `docs/assets/` for reusable
educational resources.

Keep the English and Japanese HTML pages equivalent in content. English is the
default language; Japanese pages use a `ja/index.html` subdirectory. Resource
files do not need separate language copies. Use relative links so all pages work
under the repository's GitHub Pages path. The `docs/.nojekyll` file enables plain
static-file publishing, including the `_common` directory.

GitHub Pages uses **Deploy from a branch**, with the `main` branch and the `/docs`
folder selected in the repository's Pages settings.

- [English website](https://shopify-apac-ts.github.io/shopify-partner-enablement-assets/)
- [Japanese website](https://shopify-apac-ts.github.io/shopify-partner-enablement-assets/ja/)

## Disclaimer

This site is not official Shopify documentation. The maintainers do not accept responsibility for the accuracy, completeness, or consequences of using this content. Use it at your own discretion as supplemental material for understanding Shopify concepts and workflows. Content may change without notice.
