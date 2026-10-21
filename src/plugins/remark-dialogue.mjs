import { visit } from "unist-util-visit";

/**
 * 「赛博日记」正文排版插件。
 *
 * 用法（写在 markdown 正文里即可）：
 *   :me[我说的话]   → <span class="md-me">…</span>   行内小气泡，左上角自动挂「我 ·」
 *   :hl[重点文字]   → <span class="md-hl">…</span>   淡紫底色高亮（和 **加粗变紫** 二选一）
 *
 * 为什么单独一个插件：remark-directive 会把 `:me[x]` 解析成 <me> 这类非法标签，
 * 这里把它换成真正带 class 的 span，样式统一放在 src/styles/markdown.css。
 * parseDirectiveNode 会先把 data.hName 设成指令名，所以本插件必须排在它后面，才能覆盖掉。
 */
const INLINE = {
	me: "md-me",
	hl: "md-hl",
};

export function remarkDialogue() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type !== "textDirective") return;
			const className = INLINE[node.name];
			if (!className) return;

			// biome-ignore lint/suspicious/noAssignInExpressions: 与项目内其他 remark 插件保持一致的写法
			const data = node.data || (node.data = {});
			data.hName = "span";
			data.hProperties = { class: className };
		});
	};
}
