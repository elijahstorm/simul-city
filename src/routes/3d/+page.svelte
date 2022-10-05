<script lang="ts">
	import ControlsPrompt from '$lib/Rendering/Scene/ControlsPrompt.svelte'
	import WorldViewer from '$lib/Rendering/Scene/WorldViewer.svelte'

	let input: SimulationInput
</script>

<WorldViewer {input} />
<ControlsPrompt where="3d" />
