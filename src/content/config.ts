import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
      /** 标题 */
      title: z.string(),
      /** 描述 */
      description: z.string().optional(),
      /** 标签 */
      tags: z.array(z.string()).optional(),
      /** 是否是草稿 */
      draft: z.boolean().optional(),
      /** 发布时间（当非草稿时必须提供） */
      pubDate: z.coerce.date().optional(),
      /** 封面 */
      ogImage: z.string().optional(),
    })
    .refine(
      (data) => {
        // 如果是草稿则 pubDate 不是必须的，反之时必须的
        if (data.draft === true) {
          return true;
        }
        return data.pubDate !== undefined;
      },
      {
        message: 'When draft is false, publicDate is required',
        path: ['publicDate'],
      },
    ),
});

export const collections = { post: postCollection };
