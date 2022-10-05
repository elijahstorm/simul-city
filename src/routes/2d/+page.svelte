<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import TopDownViewer from '$lib/Rendering/Scene/TopDownViewer.svelte'

	const click = () => (browser ? goto(`${base}/2d/controls`) : null)
</script>

<TopDownViewer />
<button on:click={click}>go to controls</button>

<style>
	button {
		position: absolute;
		right: 2rem;
		bottom: 2rem;
		cursor: pointer;
	}
</style>
