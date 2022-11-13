// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const docsPreset = {
  docs: {
    sidebarPath: require.resolve('./sidebars.js'),
    // Please change this to your repo.
    // Remove this to remove the "edit this page" links.
    editUrl:
      'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  },
  theme: {
    customCss: require.resolve('./src/css/custom.css'),
  },
}

const navbar = {
  title: 'Denny S. Temple',
  logo: {
    alt: 'My Site Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      type: 'doc',
      docId: 'resume/intro',
      position: 'left',
      label: 'My Resume',
    },
    {
      href: 'https://github.com/dentemple/dentemple.com',
      label: 'GitHub',
      position: 'right',
    },
  ],
}

const footer = {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [
        {
          label: 'My Resume',
          to: '/docs/resume/intro',
        },
      ],
    },
    {
      title: 'Social Links',
      items: [
        {
          label: 'Github',
          href: 'https://github.com/dentemple',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/dentemple',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/dentemple',
        },
      ],
    },
    {
      title: 'More',
      items: [
        {
          label: 'Github Repo',
          href: 'https://github.com/dentemple/dentemple.com',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Profile Website`,
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Denny S. Temple',
  tagline: 'Senior Software Engineer',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      (docsPreset),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar,
      footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
