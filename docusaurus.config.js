// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Automock',
  url: 'https://automock.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
    navbar: {
      title: 'Automock',
      logo: {
        alt: 'Automock Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'api-reference/category/api-reference',
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
          title: 'Introduction',
          items: [
            {
              label: 'What is Automock?',
              to: '/docs/introduction/intro',
            },
            {
              label: 'API Reference',
              to: '/api-reference',
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
