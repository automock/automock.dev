const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const algoliaConfig = require('./algolia-config');

const config = {
  title: 'Automock',
  tagline: 'Standalone Library for Automated Mocking of Class Dependencies',
  url: 'https://automock.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Automock',
  projectName: 'automock.dev',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Roboto:wght@400;500;700&family=Urbanist:wght@500&display=swap',
      },
    },
  ],
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
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
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
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
        ],
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'suites',
      content: `
      Announcement: Automock has transformed into <a href="https://suites.dev">Suites!</a> 🎉
      <br>
      <a href="https://suites.dev/docs/overview/migrating-from-automock">Find out more about the changeover</a> and the new features.
      `,
      backgroundColor: '#FFC2D4',
      textColor: '#091E42',
      isCloseable: false,
    },
    metadata: [
      { name: 'keywords', content: 'auto mocking, dependency injection, inversion of control, jest, sinon, nestjs, inversifyjs' },
      { name: 'description', content: 'Standalone Library for Automated Mocking of Class Dependencies.' },
    ],
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    },
    algolia: algoliaConfig,
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
      copyright: `Released under the MIT License <br /> Copyright © 2020-2023 <strong>Omer Morad</strong> <br /> Hosted by Netlify`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;