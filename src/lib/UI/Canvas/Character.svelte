<script lang="ts">
	import { renderable, width, height } from '../../Simulation/main-loop'
	import Text from './Text.svelte'
	import vec2 from 'gl-vec2'

	export let color = '#ffe554'
	export let size = 10
	export let thickness = 3

	export let startX = $width / 2
	export let startY = $height / 2
	export let moveSpeed = 0.2
	export let maxVelocity = 5

	let text: Text

	let x = startX
	let y = startY
	const velocity = [0, 0]

	let mouse = [0, 0]
	let pointer
	let mouseDown = false

	renderable((props: CanvasProps) => {
		const { context, width, height } = props

		let position: XYPosition = [x, y]
		if (mouseDown) {
			const delta = vec2.sub([], mouse, position)
			const len = vec2.length(delta)
			if (len > size * 2) {
				vec2.normalize(delta, delta)
				vec2.scaleAndAdd(velocity, velocity, delta, moveSpeed)
			}
		}

		if (x < 0 || x > width) {
			x = Math.max(0, Math.min(width, x))
			velocity[0] *= -1
		}
		if (y < 0 || y > height) {
			y = Math.max(0, Math.min(height, y))
			velocity[1] *= -1
		}
		velocity[0] = Math.max(-maxVelocity, Math.min(maxVelocity, velocity[0]))
		velocity[1] = Math.max(-maxVelocity, Math.min(maxVelocity, velocity[1]))
		velocity[0] *= 0.98
		velocity[1] *= 0.98
		x += velocity[0]
		y += velocity[1]

		position = [x, y]

		context.lineCap = 'round'

		context.beginPath()
		context.fillStyle = color
		context.strokeStyle = color
		context.lineWidth = thickness
		context.arc(x, y, size, 0, Math.PI * 2)
		context.stroke()

		if (vec2.squaredLength(velocity) > 0) {
			const normal = vec2.normalize([], velocity)
			context.lineWidth = thickness
			drawNormal({ context, position, normal, size })
		}

		// We use this to make sure the text is in sync with the character
		// Because regular prop reactivity happens a frame too late
		text.$set({
			text: `(${position.map((n) => Math.round(n)).join(', ')})`,
			x,
			y: y + size + 10
		})
	})

	const drawNormal: (args: {
		context: ContextProp
		position: number[]
		normal: number
		size: number
	}) => void = ({ context, position, normal, size }) => {
		const point = vec2.scaleAndAdd([], position, normal, size)
		context.beginPath()
		context.moveTo(position[0], position[1])
		context.lineTo(point[0], point[1])
		context.stroke()
	}

	const handleMouseMove: (args: { clientX: number; clientY: number }) => void = ({
		clientX,
		clientY
	}) => {
		mouse = [clientX, clientY]
	}

	const handleMouseDown = (ev: MouseEvent) => {
		handleMouseMove(ev)
		mouseDown = true
	}

	const handleMouseUp = (ev: MouseEvent) => {
		handleMouseMove(ev)
		mouseDown = false
	}

	const lerp = (min: number, max: number, t: number) => {
		return min * (1 - t) + max * t
	}

	const damp = (a: number, b: number, lambda: number, dt: number) => {
		return lerp(a, b, 1 - Math.exp(-lambda * dt))
	}
</script>

<svelte:window
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	on:mousemove={handleMouseMove}
/>

<Text fontSize={8} baseline="top" bind:this={text} />

<slot />
