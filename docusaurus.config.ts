import algoliaConfig from './config/algolia-config';
import type { Config } from '@docusaurus/types';
import { draculaThemeConfig } from './config/prisma-theme.config';

const config: Config = {
  title: 'Suites',
  tagline: 'Standalone Library for Automated Mocking of Class Dependencies',
  url: 'https://suites.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Suites',
  projectName: 'suites.dev',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
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
          sidebarPath: require.resolve('./config/docs-sidebars.js'),
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
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
        sidebarPath: require.resolve('./config/api-sidebars.js'),
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./config/learn-sidebars.js'),
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
        ],
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'auto mocking, dependency injection, inversion of control, jest, sinon, nestjs, inversifyjs'
      },
      {name: 'description', content: 'Standalone Library for Automated Mocking of Class Dependencies.'},
    ],
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    },
    algolia: algoliaConfig,
    navbar: {
      title: 'Suites',
      logo: {
        alt: 'Suites Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/learn',
          label: 'Learn',
          position: 'left',
        },
        {
          to: '/api-reference',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://github.com/suites-dev/suites',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    prism: draculaThemeConfig,
  },
};

export default config;