/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avinash Reddy WebPark',
  tagline: 'Personal Website',
  url: 'https://avinashreddych.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'avinashreddych', // Usually your GitHub org/user name.
  projectName: 'avinashreddych.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  trailingSlash: false,
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      // 'classic',
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Avinash Reddy WebPark',

        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'right',
          //   label: 'Tutorials',
          // },
          { to: 'blog', label: 'MyBlog', position: 'right' },
          // Please keep GitHub link to the right for consistency.



          {
            type: 'dropdown',
            label: 'Notes',
            position: 'right',
            items: [
              {
                label: 'Python',
                href: '/docs/Python/intro',
              },
              {
                label: "Bash",
                href: '/docs/Bash/intro',
              },
              {
                label: "DeepLearning",
                href: "/docs/DeepLearning/intro",
              },
              {
                label: "English Grammar",
                href: "/docs/EnglishGrammar/intro"
              },
              // ... more items
            ],
          },

          {
            to: "https://github.com/avinashreddych",
            label: "My Repos",
            position: "left"
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Summary",
            items: [
              {
                label: "Notes",
                href: "/docs"
              }
            ]
          },
          {
            title: "Social",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/avinash-reddy-b81945177/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/avinashredddych",
              }
            ]
          },
          {
            title: "Contact",
            items: [
              {
                label: "mailboxofavinash@gmail.com",
                href: "mailto:mailboxofavinash@gmail.com?subject= From Personal Website& body=Hello Avinash!"
              }
            ]
          }
        ]
      },
    }),

  staticDirectories: ['public', 'static'],
};

module.exports = config;

