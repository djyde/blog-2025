import type { SitemapOptions } from '@astrojs/sitemap';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export const languages = ['zh-CN', 'en-US'] as const;
export type LangType = (typeof languages)[number];

export interface SlateConfig {
  /** 最终部署的链接 */
  site: string;
  /** 语言 */
  lang?: LangType;
  /** 头像 */
  avatar?: string;
  /** sitemap 配置 */
  sitemap?: SitemapOptions;
  /** 网站标题 */
  title: string;
  /** 网站描述 */
  description: string;
  /** 是否显示阅读时间 */
  readTime?: boolean;
  /** 是否显示最后修改时间 */
  lastModified?: boolean;
  /** docsearch 配置 */
  algolia?: {
    appId: string;
    apiKey: string;
    indexName: string;
  };
  navigations?: Array<{
    label: string;
    href: string;
    icon?: string;
  }>;
  /** 网站底部配置 */
  footer?: {
    copyright: string;
  };
  /** 是否显示标签 */
  showTags?: boolean;
  /** 首页介绍
   * 
   *  传入 import 的 markdown 文件
   *  import Intro from 'path/to/xxx.md'
   */
  intro?: AstroComponentFactory;
  /** follow订阅认证配置 */
  follow?: {
    feedId: string;
    userId: string;
  };
  /** 分析配置 */
  analytics?: {
    plausible?: {
      domain: string;
      script: string;
    };
  };
}
