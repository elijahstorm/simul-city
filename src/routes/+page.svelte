<script lang="ts">
	import { goto } from '$app/navigation'
	import { browser } from '$app/environment'
	import { base } from '$app/paths'

	const view2d = () => (browser ? goto(`${base}/2d`) : null)
	const view3d = () => (browser ? goto(`${base}/3d`) : null)
</script>

running intro

<button on:click={view2d}>view2d</button>
<button on:click={view3d}>view3d</button>
