<script lang="ts">
	import Canvas from '$lib/UI/Canvas/Canvas.svelte'
	import FPS from '$lib/UI/Canvas/FPS.svelte'
</script>

<section class="view">
	<Canvas />
	<FPS />
</section>

<style>
	section {
		position: relative;
		display: grid;
	}
</style>
