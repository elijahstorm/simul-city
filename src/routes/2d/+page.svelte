<script lang="ts">
	import ControlsPrompt from '$lib/Rendering/Scene/ControlsPrompt.svelte'
	import TopDownViewer from '$lib/Rendering/Scene/TopDownViewer.svelte'

	let input: SimulationInput
</script>

<TopDownViewer {input} />
<ControlsPrompt where="2d" />
