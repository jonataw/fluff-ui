const path = require('path');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Fluff UI 🐑',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentation for Fluff UI.',

  base: '/fluff-ui/',

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src')
      }
    }
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#9172c2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/jonataw/fluff-ui',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Improve this page!',
    lastUpdated: true,
    nav: [
      {
        text: 'Get Started',
        link: '/get-started/installation/'
      },
      {
        text: 'Configuration',
        link: '/configuration/'
      },
      {
        text: 'Components',
        link: '/components/bulletin/'
      }
    ],
    searchPlaceholder: 'Search...',
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Get Started',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/get-started/installation',
          '/get-started/responsive-meta-tag',
          '/get-started/icon-font'
        ]
      },
      {
        title: 'Configuration',
        path: '/configuration'
      },
      {
        title: 'Components',
        children: [
          '/components/bulletin',
          '/components/button',
          '/components/checkbox',
          '/components/chip',
          '/components/datepicker',
          '/components/divider',
          '/components/form',
          '/components/icon',
          '/components/input',
          '/components/loading',
          '/components/modal',
          '/components/select',
          '/components/textarea',
          '/components/timepicker',
          '/components/toast'
        ],
        collapsable: false,
        sidebarDepth: 0
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
    'vuepress-plugin-typescript'
  ]
};
