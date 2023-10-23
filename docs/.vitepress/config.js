export default {
  title: "Bee-Admin", // 网站标题
  description: "vue/element-plus/二次封装/后台解决方案", //网站描述
  ignoreDeadLinks: true, // 最好加上，构建时会忽略md中的外链
  lastUpdated: true, //显示最近更新时间
  appearance: true, //可以选择深浅主题
  lang: "zh-cn",
  markdown: {
    lineNumbers: true,
  },
  // 主题配置
  themeConfig: {
    socialLinks: [
      //右上角图标和链接，icon 可用svg 配置
      {
        icon: "github",
        link: "https://github.com/Yinzhuo19970516/Bee-Admin",
      },
    ],
    lastUpdatedText: "更新时间",
    siteTitle: "Bee-Admin",
    nav: [
      //右侧导航
      { text: "起步", link: "/guide/index.md" },
      { text: "BeeComponents", link: "/articles/BeeTable的使用.md" },
      {
        text: "Bee-cli",
        link: "/cli/start.md",
      },
    ],
    // 侧边导航
    sidebar: {
      "/guide": [
        {
          text: "介绍",
          link: "/guide/index.md",
        },
      ],

      "/cli": [
        {
          text: "bee-cli",
          items: [
            {
              text: "安装",
              link: "/cli/start.md",
            },
            {
              text: "创建项目",
              link: "/cli/create-project.md",
            },
            {
              text: "项目tools",
              link: "/cli/project-tools.md",
            },
            {
              text: "开发tools",
              link: "/cli/dev-tools.md",
            },
          ],
        },
      ],

      "/articles": [
        {
          text: "BeeTable",
          items: [
            {
              text: "BeeTable 的基本使用",
              link: "/articles/BeeTable的使用.md",
            },
          ],
        },
        {
          text: "tableConfig",
          items: [
            { text: "配置总览", link: "/articles/tableConfig/全部配置.md" },
            {
              text: "table操作栏配置",
              link: "/articles/tableConfig/Handle的配置.md",
            },
            {
              text: "列设置",
              link: "/articles/tableConfig/列设置.md",
            },
            {
              text: "table 内置功能",
              link: "/articles/tableConfig/内置功能.md",
            },
          ],
        },
        {
          text: "TableSeach",
          items: [
            {
              text: "列表搜索",
              link: "/articles/search.md",
            },
          ],
        },
        {
          text: "beeConfig.[ts|js]",
          items: [
            {
              text: "search-config",
              link: "/",
            },
          ],
        },
      ],
    },
    outlineTitle: "目录",
  },
};
