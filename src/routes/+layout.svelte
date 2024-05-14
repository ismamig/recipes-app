<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';

    let open: boolean = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<div class="px-4">
	<slot />
</div>
