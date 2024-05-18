const head = require('./config/head')
const plugins = require('./config/plugin')
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  "title": "学无止境",
  "description": "一点点前进",
  "dest": "public",
  "head": head,
  "plugins": plugins,   //  插件
 


  "theme": "reco",
  "themeConfig": {
    "nav": nav,   //导航栏
    "sidebar":sidebar, // 侧边栏
    
    "type": "blog",


    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "GitHub",
        "desc": "new life",
        "avatar": "/github.jpg",
        "link": "https://github.com/yangyazi"
      },
      {
        "title": "博客",
        "desc": "大胆去做",
        "avatar": "/blog.jpg",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "younglo",
    "authorAvatar": "/me.jpg",
    "record": "修改备案信息",
    "startYear": "2024"
  },
  "markdown": {
    "lineNumbers": true
  }
}