<script lang="ts">
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import Canvas from '../lib/UI/Canvas/Canvas.svelte'

	const click = () => goto(`${base}/controls`)
</script>

<Canvas />
<button on:click={click}>go to controls</button>

<style>
	button {
		position: absolute;
		right: 2rem;
		bottom: 2rem;
		cursor: pointer;
	}
</style>
