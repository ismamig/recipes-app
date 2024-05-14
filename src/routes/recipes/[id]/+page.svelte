<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let recipe: Recipe = data.recipe;
</script>

<div class="relative h-[200px] bg-center bg-cover" style="background-image: url('/food-placeholder.webp');">
	<!-- <img src="/food-placeholder.jpg" alt="" class="w-screen" /> -->
	<a href="/" class="absolute top-0 letf-0 m-4 p-2 transition-all	text-white hover:text-black hover:bg-white rounded-full">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
			/>
		</svg>
	</a>
</div>
<div class="flex flex-col gap-8 px-4 py-4 bg-white">
	<h1 class="text-3xl font-bold">{recipe?.title}</h1>
	<div class="flex flex-col gap-2">
		<h2 class="text-xl font-bold">Ingrédients :</h2>
		<ul class="list-disc list-inside pl-2 flex flex-col gap-2">
			{#each recipe?.ingredients as ingredient}
				<li>{ingredient.qty} {ingredient.label}</li>
			{/each}
		</ul>
	</div>
	<div class="flex flex-col gap-2">
		<h2 class="text-xl font-bold">Préparation :</h2>
		<div class="pl-2">
			{#each recipe?.steps as step, i}
				{#if i > 0}
					<hr class="my-4" />
				{/if}
				<p><span class="text-2xl font-bold">{i + 1}. &nbsp; </span> {step}</p>
			{/each}
		</div>
	</div>
</div>
