<script lang="ts">
	export let isClosed = true
</script>

<span class="burger burger-swipe" class:isClosed />

<style>
	.burger {
		position: relative;
		width: 30px;
	}

	.burger,
	.burger::before,
	.burger::after {
		display: block;
		border-radius: 2px;
		height: 2px;
		background: #f9f9f9;
		transition: 0.3s;
	}

	.burger::before,
	.burger::after {
		content: '';
		position: absolute;
		left: 0;
		width: 100%;
	}

	.burger::before {
		top: -8px;
	}

	.burger::after {
		top: 8px;
	}

	.burger-swipe,
	.burger-swipe::before,
	.burger-swipe::after {
		transition: 0.2s ease-in-out;
	}

	.burger-swipe.isClosed {
		transform: translateX(-50px);
	}

	.burger {
		background: #f9f9f9;
	}

	.burger.isClosed {
		background: #f9f9f900;
	}

	.burger-swipe.burger-swipe.isClosed::before {
		transform: rotate(-45deg) translate(30px, 40px);
	}

	.burger-swipe.burger-swipe.isClosed::after {
		transform: rotate(45deg) translate(30px, -42px);
	}
</style>
