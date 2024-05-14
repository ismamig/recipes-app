<script lang="ts">
	import RecipeCard from '$lib/components/RecipeCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let recipes: Recipe[] = data.recipes || [];
</script>

<div class="flex flex-col gap-4">
	<input
		type="text"
		placeholder="Rechercher une recette"
		class="w-full p-2 border border-gray-300 rounded-lg"
	/>
	{#each recipes as recipe}
		<RecipeCard {recipe} />
	{/each}
</div>
