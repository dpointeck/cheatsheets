<script>
	import '../variables.css';
	import '../reset.css';
	import '../app.css';

	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="grid">
	<Sidebar />
	<slot />
</div>

<style>
	:global(body) {
		height: 100%;
	}

	.grid {
		display: grid;
		min-height: 100vh;

        grid-template-columns: 72px 1fr 1fr 1fr;
	}
</style>
