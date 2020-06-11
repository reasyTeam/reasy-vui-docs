module.exports = {
  title: "Reasy-vui", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "H5组件库", // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      { rel: "icon", href: "/favicon.ico" }
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ]
  ],

  dest: "docs",

  //下面涉及到的md文件和其他文件的路径下一步再详细解释
  themeConfig: {
    // logo: "/logo.png", //网页顶端导航栏左上角的图标

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: "首页", link: "/" },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: "版本", //默认显示
        ariaLabel: "版本", //用于识别的label
        items: [{ text: "V1.0", link: "/v1.0/" }]
      },
      { text: "在线示例", link: "/v1.0/demo.md" },

      //格式三：跳转至外部网页，需http/https前缀
      { text: "Github", link: "https://github.com/reasyTeam/reasy-vui" },
      {
        text: "其它资源", //默认显示
        ariaLabel: "其它资源", //用于识别的label
        items: [
          { text: "Vue Pc组件库", link: "https://github.com/reasyTeam/reasy-ui-vue" },
          { text: "jQuery组件库", link: "https://github.com/reasyTeam/Reasy-UI" },
          { text: "翻译工具", link: "https://github.com/reasyTeam/b28-cli" },
          { text: "抽奖程序", link: "https://github.com/reasyTeam/lottery" }
        ]
      }
    ],
    displayAllHeaders: true,
    sidebar: {
      "/v1.0/": ["", "api"]
    },
    smoothScroll: true,
    sidebarDepth: 2
  }
};
