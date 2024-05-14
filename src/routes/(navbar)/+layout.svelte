<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let open: boolean = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<div>
	<slot />
</div>
