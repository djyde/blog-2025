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
  footer: {
    copyright: '© 2025 Randy',
  }
});
