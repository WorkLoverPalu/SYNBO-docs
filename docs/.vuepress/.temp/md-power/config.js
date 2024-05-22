import { defineClientConfig } from 'vuepress/client'
import '@internal/md-power/icons.css'
import PDFViewer from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import Bilibili from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/Bilibili.vue'
import Youtube from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/Youtube.vue'
import Replit from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/Replit.vue'
import CodeSandbox from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/CodeSandbox.vue'
import Plot from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import CodeRepl from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/CodeRepl.vue'
import CanIUse from '/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-power/lib/client/components/CanIUse.vue'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('PDFViewer', PDFViewer)
    app.component('VideoBilibili', Bilibili)
    app.component('VideoYoutube', Youtube)
    app.component('ReplitViewer', Replit)
    app.component('CodeSandboxViewer', CodeSandbox)
    app.component('Plot', Plot)
    app.component('CodeRepl', CodeRepl)
    app.component('CanIUseViewer', CanIUse)
  }
})
