// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anomaly Project',
  tagline: 'A multimedia project concerning interpersonal relations, scorned demon hunters, and the macro-nation controlling them.  ',
  url: 'https://anomalyproject.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/anomaly-project.ico',
  organizationName: 'cristaldotgema', // Usually your GitHub org/user name.
  projectName: 'Anomaly-Project', // Usually your repo name.
  deploymentBranch: 'live-website', //static site branch, as opposed to source files branch

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cristaldotgema/Anomaly-Project',
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
      navbar: {
        title: 'Anomaly Project',
        logo: {
          alt: 'Anomaly Project Logo',
          src: 'img/anomaly-project.svg',
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://bio.link/aremo_te',
            label: 'Socials',
            position: 'right',
          },
          {
            href: 'https://aremo-te.art/',
            label: 'Main Site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn More',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Socials',
                href: 'https://bio.link/aremo_te',
              },
              {
                label: 'Main Site',
                href: 'https://aremo-te.art/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                to: '/Docs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyleft © ${new Date().getFullYear()} Anomaly Project, Inc. by <a href="https://aremo-te.art">Aremo</a>, and advised by <a href="https://junjie.carrd.co/">Jun</a>.<br/> Website built with Docusaurus, created and managed by <a href="https://cristaldotgema.com">Magz</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
