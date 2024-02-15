import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/MakieDocs/',
  title: "Makie's Documentation",
  description: "How to plot in Makie",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  
  markdown: {
    // config(md) {
    //   md.use(tabsMarkdownPlugin)
    // },
    // https://shiki.style/themes
    theme: {
      light: "github-light",
      dark: "github-dark"}
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/icon_transparent.png', width: 24, height: 24 },
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', 
        items: [
          {text: 'Overview', link: 'tutorials' },
          {text: 'Basics', link: '/tutorials/basic-tutorial' },
          {text: 'Layouts', link: '/tutorials/layout-tutorial' },
          {text: 'Aspects', link: '/tutorials/aspect-tutorial' },
          {text: 'Scenes', link: '/tutorials/scenes' },
        ],
      },
      { text: 'API', link: '/api' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Tutorials', 
            items: [
              {text: 'Overview', link: 'tutorials' },
              {text: 'Basics', link: '/tutorials/basic-tutorial' },
              {text: 'Layouts', link: '/tutorials/layout-tutorial' },
              {text: 'Aspects', link: '/tutorials/aspect-tutorial' },
              {text: 'Scenes', link: '/tutorials/scenes' },
            ],
          },
          { text: 'API', link: '/api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MakieOrg/Makie.jl' }
    ]
  }
})
