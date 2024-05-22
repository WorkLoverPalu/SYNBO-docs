import {
    defineUserConfig
} from 'vuepress'
import {
    viteBundler
} from '@vuepress/bundler-vite'
import {
    theme
} from './theme.js'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'SYNBO Document',
    description: 'Next-generation private equity aggregator',
    // source: path.resolve(__dirname, '../'),
    locales: {
        '/': {
            lang: 'zh-CN',
        },
        '/en/': {
            lang: 'en-US'
        },
    },
    themeConfig: {
        poweredBy: false
    },
    // pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],

    bundler: viteBundler(),

    theme,
})