<script lang="ts">
	import Burger from '$lib/UI/Widgets/Burger.svelte'
	import GlassyButton from '$lib/UI/Widgets/GlassyButton.svelte'
	import { fade, fly } from 'svelte/transition'
	import { base } from '$app/paths'
	import { page } from '$app/stores'

	const baseButtons = [
		{
			text: 'Go back to introduction',
			href: `${base}/`
		},
		{
			text: 'See more works by me',
			href: 'https://elijahstorm.github.io/'
		}
	]

	let isClosed = true
	let buttons = baseButtons

	$: Controls = {
		add: {
			text: 'View with controls',
			href: `${base}${$page.route.id}/controls`
		},
		remove: {
			text: 'Turn off controls',
			href: `${base}${$page.route.id?.replace('/controls', '')}`
		}
	}

	$: RenderStyle = {
		twoDim: {
			text: 'Show in TopDown simple style',
			href: `${base}/2d/controls`
		},
		threeDim: {
			text: 'Render in 3D (WIP / not recommended)',
			href: `${base}/3d`
		}
	}

	$: {
		isClosed
		buttons = baseButtons.slice()
		if ($page.route.id?.includes('3d')) {
			buttons.push(RenderStyle.twoDim)
		} else {
			buttons.push(RenderStyle.threeDim)
		}
		if ($page.route.id?.includes('controls')) {
			buttons.push(Controls.remove)
		} else {
			buttons.push(Controls.add)
		}
	}
</script>

{#if $page.route.id !== '/'}
	<section in:fade out:fade>
		<div class="burger">
			<GlassyButton callback={() => (isClosed = !isClosed)}>
				<Burger open={!isClosed} />
			</GlassyButton>
		</div>

		{#if !isClosed}
			{#each buttons as button, index}
				<div
					in:fly={{ y: -100, delay: 40 * index }}
					out:fly={{ y: -100, x: 100, delay: 20 * index }}
				>
					<a href={button.href}>
						<GlassyButton>{button.text}</GlassyButton>
					</a>
				</div>
			{/each}
		{/if}
	</section>
{/if}

<style>
	section {
		position: fixed;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-end;
	}

	.burger {
		z-index: 100;
	}

	a {
		display: contents;
	}
</style>
