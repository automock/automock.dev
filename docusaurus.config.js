// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Automock',
  url: 'https://automock.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Automock',
  projectName: 'automock.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./docs-sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-K2J8XLLS52',
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-reference',
        path: 'api-reference',
        routeBasePath: 'api-reference',
        sidebarPath: require.resolve('./api-sidebars.js'),
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    algolia: {
      appId: '75V27ZS1SQ',
      apiKey: 'b729950817be322fa67e6f1dd2267dd0',
      indexName: 'automock',
      contextualSearch: true,
      externalUrlRegex: 'automock\\.dev|localhost:3000',
      searchPagePath: 'search',
    },
    navbar: {
      title: 'Automock',
      logo: {
        alt: 'Automock Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/api-reference',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://github.com/automock/automock',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Navigation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/',
            },
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Step-by-Step Example',
              to: '/docs/getting-started/examples',
            },
          ],
        },
        {
          title: 'API Reference',
          items: [
            {
              label: 'TestBed',
              to: '/api-reference/api/testbed-api',
            },
            {
              label: 'TestBedBuilder',
              to: '/api-reference/api/testbedbuilder-api',
            },
            {
              label: 'UnitReference',
              to: '/api-reference/api/unitreference-api',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
