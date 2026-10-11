// import { tr } from "@i18n/languages/tr";
import type {
	ExpressiveCodeConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Lililijiabei",
	subtitle: "In adversity, life is reborn.",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	// pinned: z.boolean().optional().default(false),
	// 主题颜色配置
	themeColor: {
		hue: 300, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	// 横幅图片配置
	banner: {
		enable: true, // 背景大蝴蝶横幅（紫光已换成黑色的版本）
		src: "assets/images/butterfly-banner-black.jpg", // 原图 butterfly-banner.jpg（带紫光）保留着，想换回去改这里即可
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image（是否显示版权信息）
			text: "", // Credit text to be displayed (e.g. "Photo by XXX on Unsplash")（版权信息文本，例如“Photo by XXX on Unsplash”）
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	// 主页 Hero 欢迎卡配置
	hero: {
		enable: true, // 是否在主页顶部显示欢迎卡
		title: "", // 留空则使用 siteConfig.title
		subtitle: "In adversity, life is reborn. Welcome to my blog - OvO.", // 留空则使用 siteConfig.subtitle
		description: "", // (可选) 欢迎卡上的额外一行介绍文字，留空则不显示
	},
	// 目录配置
	toc: {
		enable: true, // Display the table of contents on the right side of the post (目录开关，开启后在文章右侧显示目录)
		depth: 3, // Maximum heading depth to show in the table, from 1 to 3
	},
	// 开关：是否启用响应式图片（srcset/sizes），以减少不同设备上的传输
	image: {
		adaptive: false, // Enable responsive images (srcset/sizes) to reduce transfer on different devices
	},
	// 网站图标配置
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/blog-icon.jpg", // 网站图标（浏览器支持 jpg）
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};
// top栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/Lililijiabei", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

// 顶部导航栏中间的两行文字（左右两边各一段；内容随时可改）
// 左段靠左、右段靠右，中间自然留出空隙，所以不用写分号分隔
export const navbarCenterText: {
	line1: { left: string; right: string };
	line2: { left: string; right: string };
} = {
	line1: {
		left: "滚轮轻滑，新文旧章次第而来",
		right: "归途、絮语与所爱，皆藏于此",
	},
	line2: {
		left: "Left: my blog — scroll gently and new pages drift down one by one.",
		right: "Right: my settings, whispers and favourite things.",
	},
};
// 左侧个人信息配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Lililijiabei",
	bio: "In adversity, life is reborn.",
	// 社交链接：留空则头像卡下方不显示任何图标按铮
	// 想恢复就把对应那行取消注释
	links: [
		// { name: "Bilibili", icon: "fa6-brands:bilibili", url: "https://space.bilibili.com/516016576" },
		// { name: "QQ", icon: "fa6-brands:qq", url: "https://qm.qq.com/q/sOmzW4VyPC" },
		// { name: "GitHub", icon: "fa6-brands:github", url: "https://github.com/Lililijiabei" },
	],
};

// 评论区配置
export const giscusConfig: GiscusConfig = {
	enable: true, // 是否启用评论区
	repo: "Lililijiabei/Wcccccc.blog.comments", // GitHub 仓库
	repoId: "R_kgDOVEbJuA", // 仓库的 node_id
	category: "Announcements", // Discussion 分类
	categoryId: "DIC_kwDOVEbJuM4DHih7",
	lang: "zh-CN",
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
