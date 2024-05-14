<script lang="ts">
	import RecipeCard from './RecipeCard.svelte';

	export let recipes: Recipe[] = [];
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row justify-between items-center mb-2">
		<h2 class="text-2xl font-bold">Dernières recettes</h2>
		<a href="/recipes" class="text-sm text-blue-500">Voir tout</a>
	</div>
	{#each recipes as recipe}
		<RecipeCard {recipe} />
	{/each}
</div>
