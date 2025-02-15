import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/katex/dist/katex.min.css";
import "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/caster/Desktop/work/深蓝/ck-项目/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
