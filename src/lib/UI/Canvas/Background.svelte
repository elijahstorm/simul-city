<script lang="ts">
	import { renderable } from '../../Simulation/main-loop'
	export let color: Color

	renderable((props: CanvasProps) => {
		const { context, width, height } = props
		context.clearRect(0, 0, width, height)
		if (color) {
			context.fillStyle = color
			context.fillRect(0, 0, width, height)
		}
	})
</script>

<!-- The following allows this component to nest children -->
<slot />
