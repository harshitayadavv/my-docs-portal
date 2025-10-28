// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Project Documentation',
  tagline: 'Comprehensive guides and references for my projects',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://harshitayadavv.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/my-docs-portal/',

  // GitHub pages deployment config.
  organizationName: 'harshitayadavv', // Your GitHub username
  projectName: 'my-docs-portal', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Edit URL for your docs
          editUrl: 'https://github.com/harshitayadavv/my-docs-portal/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/harshitayadavv/my-docs-portal/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card for sharing
      image: 'img/docusaurus-social-card.jpg',
      
      navbar: {
        title: 'My Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/harshitayadavv/my-docs-portal',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/introduction',
              },
              {
                label: 'API Reference',
                to: '/docs/api-reference/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/harshitayadavv',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/harshita-yadav-404847258',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harshita Yadav. Built with Docusaurus.`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'python', 'java'],
      },

      // Algolia search (you'll need to set this up later)
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      // },
    }),
};

module.exports = config;