import themePlume from 'vuepress-theme-plume'
import {
  enNotes,
  zhNotes
} from './notes.js'
import {
  enNavbar,
  zhNavbar
} from './navbar.js'


export const theme = themePlume({
  docsDir: 'docs',
  footer: {
    message:"",
    copyright: 'Copyright © 2024-present SYNBO'
  },
  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    '/en/': {
      notes: enNotes,
      navbar: enNavbar,
    },
  },
  plugins: {
    frontmatter: {
      exclude: ['**/*.snippet.*']
    },

    shiki: {
      twoslash: true
    },

    markdownEnhance: {
      demo: true,
      include: true,
      chart: true,
      echarts: true,
      mermaid: true,
      flowchart: true,
    },
    markdownPower: {
      pdf: true,
      caniuse: true,
      plot: true,
      bilibili: true,
      youtube: true,
      icons: true,
      codepen: true,
      replit: true,
      codeSandbox: true,
      jsfiddle: true,
      repl: {
        go: true,
        rust: true,
        kotlin: true,
      },
    },

    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'WorkLoverPalu/SYNBO-docs',
      repoId: 'R_kgDOL-dxSg',
      category: 'Q&A',
      categoryId: 'DIC_kwDOL-dxSs4CfgZD',

      mapping: 'url',
      reactionsEnabled: true,
      inputPosition: 'top',
      darkTheme: 'dark_protanopia',
      lightTheme: 'light_protanopia',
    },

    watermark: {
      enabled: false,
      watermarkOptions: {
        content: 'vuepress-theme-plume',
      },
    },

  },
})