<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	onMount(() => {
		if (browser) goto(`${base}/3d`)
	})
</script>

intro
