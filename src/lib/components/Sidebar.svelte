<script>
	export let open = false;
</script>

<aside class="absolute w-full h-full bg-white border-r-2 shadow-sm p-4" class:open>
	<div class="flex">
		<button
			class="text-gray-500 hover:text-gray-900 border-none focus:outline-none w-fit"
			class:open
			on:click={() => (open = !open)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
    <div class="flex justify-center mt-4">
        <h1 class="text-4xl font-bold">La Couisine !</h1>
    </div>
	<nav class="flex flex-col items-center py-10 text-2xl text-black gap-4">
		<a class="block" href="/" on:click={() => (open = !open)}>Accueil</a>
		<a class="block" href="/recipes" on:click={() => (open = !open)}>Toutes les Recettes</a>
		<a class="block" href="/new" on:click={() => (open = !open)}>Nouvelle Recette</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
