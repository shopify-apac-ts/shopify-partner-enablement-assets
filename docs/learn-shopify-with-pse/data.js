window.learnShopifyEvents = [
  {
    number: 13,
    date: "2026-01-08",
    time: "13:44 JST",
    slug: "20260108_winter_26_recap",
    title: "Recent updates and Shopify Editions Winter ’26 recap",
    summary: {
      en: "A review of recent authentication, theme login, inventory and developer tooling updates, followed by the key announcements from Shopify Editions Winter ’26.",
      ja: "認証、テーマログイン、在庫、開発ツールの最新情報と、Shopify Editions Winter ’26の主要アップデートを振り返ります。"
    },
    files: ["Japanese Shopify Editions Winter ’26 presentation"],
    references: [
      "https://shopify.dev/docs/apps/build/authentication-authorization",
      "https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/",
      "https://shopify.dev/docs/storefronts/themes/login",
      "https://github.com/shopify-apac-ts/shopify-barebone-app-sample/tree/main/extensions/my-checkout-ui-ext-3",
      "https://www.shopify.com/editions/winter2026",
      "https://www.shopify.com/jp/editions/winter2026",
      "https://help.shopify.com/ja/manual/promoting-marketing/seo/shopify-catalog/requirements",
      "https://apps.shopify.com/launch-check?locale=ja",
      "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate",
      "https://shopify.dev/docs/apps/build/devmcp"
    ]
  },
  {
    number: 14,
    date: "2026-02-12",
    time: "13:50 JST",
    slug: "20260212_ucp_deep_dive",
    title: "Recent updates and UCP deep dive",
    summary: {
      en: "A technical deep dive into Universal Commerce Protocol, agent authentication, catalog and checkout capabilities, MCP clients and Shopify developer tooling.",
      ja: "Universal Commerce Protocol（UCP）、エージェント認証、カタログとチェックアウト、MCPクライアント、Shopify開発ツールを技術的に掘り下げます。"
    },
    files: ["Agentic Commerce Protocols", "UCP & MCP Architecture Deep Dive [JA]"],
    references: [
      "https://shopify.dev/docs/agents/get-started/authentication",
      "https://dev.shopify.com/dashboard",
      "https://shopify.dev/docs/agents/checkout",
      "https://shopify.dev/docs/agents/catalog",
      "https://developers.google.com/merchant/ucp/guides/ucp-profile#:~:text=On%20this%20page,version%2C%20services%2C%20and%20capabilities.",
      "https://www.shopify.com/editions/winter2026#shopify-simgym-app",
      "https://apps.shopify.com/simgym?locale=ja",
      "https://modelcontextprotocol.io/docs/develop/build-client",
      "https://shopify.dev/docs/apps/build/devmcp",
      "https://shopify.dev/docs/agents/get-started/complete-checkout",
      "https://ucp.dev/latest/specification/reference/"
    ]
  },
  {
    number: 15,
    date: "2026-03-12",
    time: "13:50 JST",
    slug: "20260312_new_login_migration",
    title: "Recent updates, new login and My Page migration",
    summary: {
      en: "Guidance for moving from legacy customer accounts to the new customer account experience, including theme and headless login patterns and an OIDC SSO implementation.",
      ja: "従来のお客様アカウントから新しいお客様アカウントへの移行、テーマ・ヘッドレスでのログイン、OIDC SSO実装を解説します。"
    },
    files: [
      "Session presentation",
      "Scratch-built OIDC SSO demo",
      "Custom login page Liquid demo",
      "New login redirect demo"
    ],
    notes: {
      en: ["The completed OIDC SSO sample, source code, wiki and demo are available in the linked GitHub repository."],
      ja: ["セッション中に完成できなかったOIDC SSOは、完成版のソースコード、Wiki、デモをGitHubで公開しています。"]
    },
    references: [
      "https://help.shopify.com/ja/manual/customers/customer-accounts",
      "https://shopify.dev/docs/storefronts/themes/login",
      "https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/hydrogen-with-account-component",
      "https://note.com/shopify_and_/n/ncb8bbc20b9b0",
      "https://service.appunity.jp/id/blog/shopify-legacy-customer-accounts-deprecation",
      "https://loppis-sweden.com/blogs/shopify",
      "https://x.com/bonjour_ken/status/2016423594868539897?s=20",
      "https://github.com/shopify-apac-ts/open_id_connect_sso_sample",
      "https://github.com/shopify-apac-ts/open_id_connect_sso_sample/wiki"
    ]
  },
  {
    number: 16,
    date: "2026-04-09",
    time: "13:50 JST",
    slug: "20260409_new_login_migration_2",
    title: "New login and My Page migration, part 2",
    summary: {
      en: "A follow-up on new customer account migration and rollout, with Sidekick development, Customer Account APIs and UI extensions, session tokens and OIDC architecture.",
      ja: "新しいお客様アカウントへの移行とロールアウトの続編として、Sidekick開発、Customer Account APIとUI拡張、セッショントークン、OIDC構成を扱います。"
    },
    files: ["Session presentation", "Sidekick version-history screenshot"],
    notes: {
      en: [
        "Sidekick development preview required an early-access request from the linked page rather than a development-store feature preview.",
        "Version history appears in the timeline after selecting a file, allowing an earlier version to be restored.",
        "Updating Dawn resolved the custom Liquid display issue. For production themes, prefer custom Liquid or copied sections and blocks to minimize changes to the base theme."
      ],
      ja: [
        "Sidekickの開発プレビューは、開発ストアのフィーチャープレビューではなく、リンク先フォームから申請するEarly Accessです。",
        "ファイルを選択するとTimelineに履歴が表示され、指定したバージョンへ戻せます。",
        "Dawnを最新版へ更新するとカスタムLiquidが表示されました。実案件ではテーマ本体への変更を抑えるため、カスタムLiquidまたはコピーしたセクション・ブロックの利用を推奨します。"
      ]
    },
    references: [
      "https://shopify.dev/docs/apps/build/sidekick",
      "https://shopify.dev/docs/api/customer-authentication/",
      "https://shopify.dev/docs/api/customer-authentication/provider-guides/auth0",
      "https://shopify.dev/docs/api/customer-account-ui-extensions/latest",
      "https://shopify.dev/docs/api/customer/unstable",
      "https://shopify.dev/docs/api/customer-account-ui-extensions/latest/target-apis/platform-apis/session-token-api",
      "https://github.com/shopify-apac-ts/open_id_connect_sso_sample",
      "https://github.com/shopify-apac-ts/open_id_connect_sso_sample/wiki",
      "https://github.com/shopify-apac-ts/open_id_connect_sso_sample/blob/main/ARCHITECTURE.md",
      "https://openid.net/specs/openid-connect-core-1_0.html",
      "https://open-id-connect-sso-sample.onrender.com/"
    ]
  },
  {
    number: 17,
    date: "2026-05-14",
    time: "13:51 JST",
    slug: "20260514_sidekick_oidc",
    title: "Sidekick app extensions and OIDC tips",
    summary: {
      en: "Recent agentic storefront and analytics updates, Shopify’s AI toolkit, Sidekick app actions and practical OIDC SSO guidance.",
      ja: "エージェント型ストアフロントと分析の最新情報、Shopify AI Toolkit、Sidekickアプリアクション、OIDC SSO実装のポイントを紹介します。"
    },
    files: ["Shopify customer account SSO and OIDC webinar guide [JA]"],
    references: [
      "https://help.shopify.com/ja/manual/online-sales-channels/agentic-storefronts/agentic-home",
      "https://help.shopify.com/ja/manual/online-sales-channels/agentic-storefronts/products",
      "https://www.shopify.com/jp/agentic-readiness",
      "https://shopify.dev/docs/apps/build/ai-toolkit",
      "https://github.com/shopify-apac-ts/open_id_connect_sso_sample",
      "https://help.shopify.com/ja/manual/reports-and-analytics/shopify-reports/overview-dashboard/targets",
      "https://help.shopify.com/ja/manual/reports-and-analytics/shopify-reports/report-types/custom-reports/annotations",
      "https://help.shopify.com/ja/manual/shopify-flow/reference/actions/get-analytics-data",
      "https://www.shopify.com/news/entrepreneurs-outselling-mainstream",
      "https://shopify.dev/docs/apps/build/sidekick/build-app-actions"
    ]
  },
  {
    number: 18,
    date: "2026-06-11",
    time: "13:54 JST",
    slug: "20260611_theme_app_use_cases",
    title: "New theme and app use cases",
    summary: {
      en: "Implementation examples for themes and apps, covering generated test data, app proxies, offline tokens, checkout UI, multiple shipping destinations and Polaris components.",
      ja: "生成テストデータ、アプリプロキシ、オフライントークン、Checkout UI、複数配送先、Polarisコンポーネントを使ったテーマ・アプリ実装例を紹介します。"
    },
    references: [
      "https://shopify.dev/docs/api/development-stores/generated-test-data?sellingPlanGroupId=1989476630",
      "https://shopify.dev/docs/apps/build/online-store/app-proxies",
      "https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/offline-access-tokens",
      "https://github.com/shopify-apac-ts/shopify-barebone-app-sample/blob/codex/modern-shopify-refactor/app/root.jsx",
      "https://github.com/shopify-apac-ts/shopify-barebone-app-sample/blob/main/frontend/src/pages/CheckoutUi.jsx",
      "https://shopify.dev/docs/api/admin-graphql/latest#authentication",
      "https://github.com/shopify-apac-ts/shopify-barebone-app-sample/wiki/%E8%A4%87%E6%95%B0%E9%85%8D%E9%80%81%E5%85%88%E5%AE%9F%E8%A3%85%E3%83%99%E3%82%B9%E3%83%88%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9",
      "https://shopify.dev/docs/api/checkout-ui-extensions/latest/web-components/actions/button",
      "https://shopify.dev/docs/api/polaris"
    ]
  },
  {
    number: 19,
    date: "2026-07-09",
    time: "13:51 JST",
    slug: "20260709_editions_recap",
    title: "Shopify Editions Spring ’26 recap",
    summary: {
      en: "A guided recap of Shopify Editions Spring ’26 across commerce, payments, Shop, international selling, fulfillment, analytics, AI tools, retail and agentic commerce.",
      ja: "Shopify Editions Spring ’26の発表を、コマース、決済、Shop、越境販売、フルフィルメント、分析、AI、リテール、エージェントコマースの観点から振り返ります。"
    },
    references: [
      "https://www.shopify.com/jp/editions/spring2026",
      "https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceCreate",
      "https://shopify.dev/docs/apps/build/checkout/migrate-to-web-components#migrate-using-ai",
      "https://help.shopify.com/ja/manual/taxes/shopify-tax/shopify-tax-canada",
      "https://www.shopify.com/jp/payments?country=jp&lang=ja&utm_source=s26-editions-website&utm_medium=product-cta&utm_campaign=spring26edition",
      "https://help.shopify.com/ja/manual/payments/shop-pay/shop-pay-on-any-platform#requirements",
      "https://shop.app/minis?locale=ja#gallery",
      "https://help.shopify.com/ja/manual/online-sales-channels/shop/sign-in-features",
      "https://help.shopify.com/ja/manual/international/duties-and-import-taxes/charging-duties#review-duties",
      "https://help.shopify.com/ja/manual/international/pricing/gift-cards#local-currency-gift-cards",
      "https://help.shopify.com/ja/manual/fulfillment/fulfilling-orders/batch-fulfillment",
      "https://help.shopify.com/ja/manual/fulfillment/setup/delivery-methods/pickup-in-store#considerations-for-setting-up-pickup-in-store",
      "https://help.shopify.com/ja/manual/products/inventory/setup/multi-managed-inventory#multi-managed-inventory",
      "https://help.shopify.com/ja/manual/shopify-flow/getting-started/concepts/variables",
      "https://help.shopify.com/ja/manual/shopify-flow/manage/manage#add-note",
      "https://www.shopify.com/blog/analytics-spring-2026?country=jp&lang=ja",
      "https://shopify.dev/docs/apps/build/ai-toolkit",
      "https://www.shopify.com/build-with-ai?country=jp&lang=ja#app-builders",
      "https://claude.com/connectors/shopify",
      "https://hardware.shopify.com/products/verifone-victa-mobile",
      "https://www.shopify.com/blog/retail-roundup-february-2026?country=jp&lang=ja",
      "https://help.shopify.com/ja/manual/online-sales-channels/shopify-collective/retailers/analytics-insights",
      "https://help.shopify.com/ja/manual/online-store/themes/customizing-themes?utm_source=s26-editions-website&utm_medium=product-cta&utm_campaign=spring26edition",
      "https://apps.shopify.com/shopify-smart-pricing?locale=ja",
      "https://help.shopify.com/ja/manual/customers/customer-accounts",
      "https://www.shopify.com/editions/demos/showroom",
      "https://www.shopify.com/editions/demos/starred",
      "https://www.shopify.com/jp/ucp",
      "https://ucp.dev/"
    ]
  },
  {
    number: 20,
    date: "2026-08-13",
    time: "13:50 JST",
    slug: "20260813_new_app_implementation",
    title: "New Shopify app implementation and recent updates",
    summary: {
      en: "Recent ecosystem and AI updates with implementation guidance for WebMCP, Shopify App Home and sample Shopify applications.",
      ja: "エコシステムとAIの最新動向を踏まえ、WebMCP、Shopify App Home、Shopifyアプリのサンプル実装を解説します。"
    },
    notes: {
      en: ["Correction: Cloudflare WebMCP and Shopify WebMCP are separate implementations. In Chrome, enable “WebMCP for testing” from chrome://flags/#enable-webmcp-testing to test Shopify Liquid themes."],
      ja: ["訂正：CloudflareとShopifyのWebMCPは別の実装です。ChromeでShopifyのLiquidテーマを検証するには、chrome://flags/#enable-webmcp-testingから「WebMCP for testing」を有効にします。"]
    },
    references: [
      "https://dotdev.shopify.com/",
      "https://www.shopify.com/partners/blog/shopify-build-award-2026",
      "https://www.youtube.com/playlist?list=PLDRyt8fMwbcs",
      "https://shopify.engineering/under-the-river",
      "https://www.shopify.com/news/a-world-with-more-builders",
      "https://www.shopify.com/enterprise/blog/ai-search-category-behavior",
      "https://shopify.dev/changelog/webmcp-liquid-hydrogen",
      "https://blog.cloudflare.com/webmcp/",
      "https://shopify.dev/docs/api/app-home",
      "https://github.com/shopify-apac-ts/shopify-barebone-app-sample",
      "https://github.com/shopify-apac-ts/open_id_connect_sso_sample"
    ]
  },
  {
    number: 21,
    date: "2026-09-10",
    time: "13:50 JST",
    slug: "20260910_checkout_pos_agentic",
    title: "Checkout, POS receipt, Shopify Catalog and agentic updates",
    summary: {
      en: "Updates on checkout implementation, POS receipt customization, Shopify Catalog, agentic commerce and the Universal Commerce Protocol.",
      ja: "チェックアウト実装、POSレシートのカスタマイズ、Shopify Catalog、エージェントコマース、Universal Commerce Protocolの最新情報を扱います。"
    },
    files: ["Shopify UCP Deep Dive [JA]"],
    references: [
      "https://www.shopify.com/legal/api-terms?country=jp&lang=ja",
      "https://www.shopify.com/jp/blog/partner-terms-request",
      "https://help.shopify.com/ja/partners/partner-program/shopify-branding",
      "https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate",
      "https://apps.shopify.com/search?q=%E5%B8%B3%E7%A5%A8&locale=ja",
      "https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/print-api",
      "https://help.shopify.com/ja/manual/sell-in-person/shopify-pos/customize-pos/printed-receipts/index",
      "https://shopify.dev/docs/agents",
      "https://ucp.dev/latest/specification/shopping/catalog/#key-concepts",
      "https://shopify-apac-ts.github.io/shopify-ucp-demo-mcp/docs/ja/",
      "https://shopify.dev/docs/agents/catalog/global-catalog-extension"
    ]
  }
];
