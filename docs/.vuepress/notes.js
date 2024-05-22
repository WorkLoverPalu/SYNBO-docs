import {
    definePlumeNotesConfig
} from 'vuepress-theme-plume'

export const zhNotes = definePlumeNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [{
            dir: 'theme/document',
            link: '/document/',
            sidebar: [{
                    text: '快速开始',
                    collapsed: false,
                    icon: 'carbon:idea',
                    items: ['简介', '钱包教程', '快捷资源'],
                },
                {
                    text: 'Vault',
                    icon: 'lucide:box',
                    collapsed: false,
                    dir: "基金池",
                    items: ['基金池-功能文档', '基金池-操作手册', '基金池-合约文档'],
                },
                {
                    text: 'Farm',
                    icon: 'lucide:box',
                    collapsed: false,
                    dir: "挖矿",
                    items: ['挖矿-功能文档', '挖矿-操作手册', '挖矿-合约文档'],
                },
                {
                    text: 'Target',
                    icon: 'lucide:box',
                    collapsed: false,
                    dir: "项目",
                    items: ['项目-功能文档', '项目-操作手册', '项目-合约文档'],
                },
                {
                    text: 'Distribution',
                    icon: 'lucide:box',
                    collapsed: false,
                    dir: "分发",
                    items: ['分发-功能文档', '分发-操作手册', '分发-合约文档'],
                },
                {
                    text: 'Cheque',
                    icon: 'lucide:box',
                    collapsed: false,
                    dir: "支票",
                    items: ['支票-功能文档', '支票-操作手册', '支票-合约文档'],
                },


            ],
        },


    ]
})
export const enNotes = definePlumeNotesConfig({
    dir: 'en/notes',
    link: '/',
    notes: [{
        dir: 'theme/document',
        link: '/en/document',
        sidebar: [{
                text: 'Quick Start',
                collapsed: false,
                icon: 'carbon:idea',
                items: ['Introduction', 'WalletTutorial', 'QuickResources'],
            },
            {
                text: 'Vault',
                icon: 'lucide:box',
                collapsed: false,
                dir: "vault",
                items: ['FundInstructions', 'FundTutorial', 'FundContract'],
            },
            {
                text: 'Farm',
                icon: 'lucide:box',
                collapsed: false,
                dir: "farm",
                items: ['MiningInstructions', 'MiningTutorial', 'MiningContract'],
            },
            {
                text: 'Target',
                icon: 'lucide:box',
                collapsed: false,
                dir: "target",
                items: ['TargetInstructions', 'TargetTutorial', 'TargetContract'],
            },
            {
                text: 'Distribution',
                icon: 'lucide:box',
                collapsed: false,
                dir: "distribute",
                items: ['DistributeInstructions', 'DistributeTutorial', 'DistributeContract'],
            },
            {
                text: 'Cheque',
                icon: 'lucide:box',
                collapsed: false,
                dir: "cheque",
                items: ['ChequeInstructions', 'ChequeTutorial', 'ChequeContract'],
            },


        ],
    }, ],
})