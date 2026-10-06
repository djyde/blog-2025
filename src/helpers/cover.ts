/*
 * @file 文章配图：src/assets/covers/<slug>.jpg，按文章 id 自动匹配
 */
import type { ImageMetadata } from 'astro';

const covers = import.meta.glob<{ default: ImageMetadata }>('../assets/covers/*.jpg', { eager: true });

export function getCover(slug: string): ImageMetadata | undefined {
  return covers[`../assets/covers/${slug}.jpg`]?.default;
}
