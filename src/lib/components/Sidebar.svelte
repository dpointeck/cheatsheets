<aside>
	<nav>
		<a href="/">Home</a>
		<a href="/vim">Vim</a>
	</nav>
</aside>

<style>
	aside {
		display: flex;
		align-items: start;
		justify-content: center;
		background-color: #1d4ed8;
		color: #fff;
		padding: 1rem;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 16px;
		justify-content: center;
	}

	a {
		writing-mode: vertical-lr;
		text-orientation: sideways;
		transform: rotate(180deg);

	}


	@media (prefers-color-scheme: dark) {
		aside {
			background-color: #eab308;
			color: #083344;
			padding: 1rem;
		}
	}
</style>
