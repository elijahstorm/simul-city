<script lang="ts">
	import Scene from '$lib/Rendering/Bees/Scene.svelte'
	import GuiControls from '$lib/Rendering/Scene/GuiControls.svelte'
	import WorldViewer from '$lib/Rendering/Scene/WorldViewer.svelte'
</script>

<WorldViewer controls>
	<div slot="scene">
		<Scene />
	</div>
	<GuiControls />
</WorldViewer>
