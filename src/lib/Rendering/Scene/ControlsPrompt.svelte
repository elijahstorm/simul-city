<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'

	export let where: string

	const click = () => (browser ? goto(`${base}/${where}/controls`) : null)
</script>

<button on:click={click}>go to controls</button>

<style>
	button {
		position: absolute;
		right: 2rem;
		bottom: 2rem;
		cursor: pointer;
	}
</style>
