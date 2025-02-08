/*
 * @file 主题配置
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  site: 'https://lutaonan.com',
  avatar: '/avatar.jpg',
  title: `Randy's Blog`,
  description: 'About life, technology and reading',
  lastModified: false,
  readTime: true,
  showTags: false,
  footer: {
    copyright: '© 2025 Randy',
  },
  navigations: [
    {
      label: "一对一咨询",
      href: "/consulting",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 1.558.366 3.033 1.018 4.342c.104.21.114.523-.005 1.01a9 9 0 0 1-.22.729l-.03.086c-.074.22-.154.46-.214.683c-.382 1.427.924 2.733 2.35 2.351c.224-.06.463-.14.684-.214l.086-.03a9 9 0 0 1 .729-.22c.487-.12.8-.11 1.01-.005A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25"/></svg>`
    },
    {
      label: 'RSS',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93z"/></svg>`,
      href: '/rss.xml',
    },
  ]
});
