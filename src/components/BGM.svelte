<script lang="ts">
import Icon from "@iconify/svelte";

let { src, title = "" }: { src: string; title?: string } = $props();

let audio: HTMLAudioElement;
let playing = $state(false);

function toggle() {
	if (playing) {
		audio.pause();
		playing = false;
	} else {
		const result = audio.play();
		if (result !== undefined) {
			result
				.then(() => {
					playing = true;
				})
				.catch(() => {
					playing = false;
				});
		}
	}
}
</script>

<div class="flex flex-row items-center">
	<button
		type="button"
		onclick={toggle}
		aria-label={playing ? "暂停背景音乐" : "播放背景音乐"}
		title={playing ? "暂停背景音乐" : "播放背景音乐"}
		class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-1.5 hover:text-[var(--primary)] active:scale-90"
	>
		<span class:bgm-spinning={playing}>
			<Icon
				icon={playing ? "fa6-solid:music" : "material-symbols:music-note-rounded"}
				class="text-[0.85rem]"
			></Icon>
		</span>
	</button>
	{#if title}
		<button
			type="button"
			onclick={toggle}
			class="text-sm text-black/50 dark:text-white/50 hover:text-[var(--primary)] transition"
		>
			{title}
		</button>
	{/if}
	<audio bind:this={audio} src={src} loop></audio>
</div>

<style>
.bgm-spinning {
	display: inline-flex;
	animation: bgm-spin 3s linear infinite;
}
@keyframes bgm-spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
