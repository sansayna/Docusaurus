// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Microsite', // Title of your site
  tagline: 'Dinosaurs are cool', // A tagline for your site
  favicon: 'img/favicon.ico', // Path to your favicon

  // Set the production URL of your site
  url: 'https://sansayna.github.io',
  // Set the base URL for your site (GitHub repository name with trailing slash)
  baseUrl: '/Docusaurus/',

  // GitHub Pages deployment config
  organizationName: 'sansayna', // Your GitHub username
  projectName: 'Docusaurus', // Your repository name

  // Handling broken links
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // Add other languages here if needed
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sansayna/Docusaurus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/sansayna/Docusaurus/edit/main/',
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
      image: 'img/docusaurus-social-card.jpg', // Path to social card image
      navbar: {
        title: 'My Microsite',
        logo: {
          alt: 'My Microsite Logo',
          src: 'img/logo.svg', // Path to logo in the static folder
        },
        items: [
          { to: '/docs/about', label: 'About', position: 'left' }, // Link to About page
          { to: '/docs/contact', label: 'Contact', position: 'left' }, // Link to Contact page
          {
            href: 'https://github.com/sansayna/Docusaurus',
            label: 'GitHub',
            position: 'right', // Link to GitHub repository
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
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Contact',
                to: '/docs/contact',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sansayna/Docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Microsite. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github, // Light theme for code blocks
        darkTheme: prismThemes.dracula, // Dark theme for code blocks
      },
    }),
};

export default config;