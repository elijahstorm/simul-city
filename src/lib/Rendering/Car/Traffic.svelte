<script lang="ts">
	import CarComponent from './FloatingCar.svelte'
	// import CarComponent from './Car.svelte'
	import { config } from '$lib/stores'
	import BotDriver from './BotDriver.svelte'

	const { simulation, controls } = config
</script>

{#each $simulation.carSpots as car, index (car)}
	<BotDriver let:movement>
		<CarComponent
			position={{ x: (car.box.y / 200) * 16, z: (car.box.x / 200) * 16, y: 1 }}
			rotation={{ y: car.box.angle }}
			{movement}
			simple={index !== $controls.cameraFocus}
		>
			{#if index == $controls.cameraFocus}
				<slot />
			{/if}
		</CarComponent>
	</BotDriver>
{/each}
