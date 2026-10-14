import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		pinned: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* 背景音乐：音频文件地址（本地放 public/ 下，如 /audio/bgm.mp3，也支持网络直链） */
		audio: z.string().optional().default(""),

		/* 背景音乐名称（显示在播放按钮旁） */
		audioTitle: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
const photosCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
const specCollection = defineCollection({
	schema: z.object({
		friends: z
			.array(
				z.object({
					title: z.string(),
					imgurl: z.string(),
					desc: z.string(),
					siteurl: z.string(),
					tags: z.array(z.string()).optional().default([]),
				}),
			)
			.optional()
			.default([]),
	}),
});
export const collections = {
	posts: postsCollection,
	photos: photosCollection,
	spec: specCollection,
};
