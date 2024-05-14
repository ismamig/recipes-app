<script lang="ts">
	import LastRecipes from '$lib/components/LastRecipes.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let recipes: Recipe[] = data.recipes || [];
</script>

<div class="flex flex-col gap-4 px-4">
	<!-- <div>
		<div class="flex flex-row justify-between items-center mb-2">
			<h2 class="text-2xl font-bold">Dernières recettes</h2>
			<a href="/recipes" class="text-sm text-blue-500">Voir tout</a>
		</div>
		<div class="flex flex-col items-start">
			<img
				src="https://via.assets.so/img.jpg?w=200&h=200&tc=blue&bg=#cecece&t=Recipe"
				alt="Recipe"
				class="w-[200px] h-[200px] rounded-xl"
			/>
			<h3 class="max-w-[200px] truncate font-bold">Escalope de poulet à la milanaise</h3>
		</div>
	</div> -->
	<LastRecipes {recipes} />
</div>
