export const themeData = JSON.parse("{\"docsDir\":\"docs\",\"footer\":{\"message\":\"\",\"copyright\":\"Copyright © 2024-present SYNBO\"},\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"blog\":{\"pagination\":{\"prevPageText\":\"上一页\",\"nextPageText\":\"下一页\"}},\"outlineLabel\":\"此页内容\",\"returnToTopLabel\":\"返回顶部\",\"editLinkText\":\"编辑此页\",\"contributorsText\":\"贡献者\",\"appearanceText\":\"外观\",\"prevPageLabel\":\"上一页\",\"nextPageLabel\":\"下一页\",\"lastUpdated\":{\"text\":\"最后更新于\"},\"notFound\":{\"code\":\"404\",\"title\":\"页面未找到\",\"quote\":\"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。\",\"linkText\":\"返回首页\"},\"encryptButtonText\":\"确认\",\"encryptPlaceholder\":\"请输入密码\",\"encryptGlobalText\":\"本站只允许密码访问\",\"encryptPageText\":\"本页面只允许密码访问\",\"notes\":{\"dir\":\"notes\",\"link\":\"/\",\"notes\":[{\"dir\":\"theme/document\",\"link\":\"/document/\",\"sidebar\":[{\"text\":\"快速开始\",\"collapsed\":false,\"icon\":\"carbon:idea\",\"items\":[\"简介\",\"钱包教程\",\"快捷资源\"]},{\"text\":\"Vault\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"基金池\",\"items\":[\"基金池-功能文档\",\"基金池-操作手册\",\"基金池-合约文档\"]},{\"text\":\"Farm\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"挖矿\",\"items\":[\"挖矿-功能文档\",\"挖矿-操作手册\",\"挖矿-合约文档\"]},{\"text\":\"Target\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"项目\",\"items\":[\"项目-功能文档\",\"项目-操作手册\",\"项目-合约文档\"]},{\"text\":\"Distribution\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"分发\",\"items\":[\"分发-功能文档\",\"分发-操作手册\",\"分发-合约文档\"]},{\"text\":\"Cheque\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"支票\",\"items\":[\"支票-功能文档\",\"支票-操作手册\",\"支票-合约文档\"]}]}]},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"activeMatch\":\"^/\"},{\"text\":\"文档\",\"icon\":\"material-symbols:article-outline\",\"link\":\"/notes/theme/document/简介.md\",\"activeMatch\":\"^/document/\"}],\"docsDir\":\"docs\",\"footer\":{\"message\":\"\",\"copyright\":\"Copyright © 2024-present SYNBO\"}},\"/en/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"appearanceText\":\"Appearance\",\"lastUpdated\":{\"text\":\"Last Updated\"},\"encryptButtonText\":\"Confirm\",\"encryptPlaceholder\":\"Enter password\",\"encryptGlobalText\":\"Only password can access this site\",\"encryptPageText\":\"Only password can access this page\",\"notes\":{\"dir\":\"en/notes\",\"link\":\"/\",\"notes\":[{\"dir\":\"theme/document\",\"link\":\"/en/document\",\"sidebar\":[{\"text\":\"Quick Start\",\"collapsed\":false,\"icon\":\"carbon:idea\",\"items\":[\"Introduction\",\"WalletTutorial\",\"QuickResources\"]},{\"text\":\"Vault\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"vault\",\"items\":[\"FundInstructions\",\"FundTutorial\",\"FundContract\"]},{\"text\":\"Farm\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"farm\",\"items\":[\"MiningInstructions\",\"MiningTutorial\",\"MiningContract\"]},{\"text\":\"Target\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"target\",\"items\":[\"TargetInstructions\",\"TargetTutorial\",\"TargetContract\"]},{\"text\":\"Distribution\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"distribute\",\"items\":[\"DistributeInstructions\",\"DistributeTutorial\",\"DistributeContract\"]},{\"text\":\"Cheque\",\"icon\":\"lucide:box\",\"collapsed\":false,\"dir\":\"cheque\",\"items\":[\"ChequeInstructions\",\"ChequeTutorial\",\"ChequeContract\"]}]}]},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\",\"activeMatch\":\"^/\"},{\"text\":\"Document\",\"icon\":\"material-symbols:article-outline\",\"link\":\"/en/document/r4nbt7bn/\",\"activeMatch\":\"^/en/document/\"}]}},\"article\":\"/article/\",\"notes\":{\"link\":\"/\",\"dir\":\"notes\",\"notes\":[]},\"appearance\":true,\"navbarSocialInclude\":[\"github\",\"twitter\",\"discord\",\"facebook\"],\"editLink\":true,\"contributors\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
