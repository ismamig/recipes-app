<script lang="ts">
	import { getTagClass, getTagLabel, tags } from '$lib/tags';
	import type { PageData } from './$types';

	export let data: PageData;
	let recipe: Recipe = data.recipe;

	function getCookTypeIcon(cookType: string) {
		switch (cookType) {
			case 'FOUR':
				return "/icons/oven.svg";
			case 'POELE':
				return "/icons/pan.svg";
			case 'AUTRE':
				return ''; // Path to another icon or leave empty
			default:
				return '';
		}
	}
</script>

<div
	class="relative h-[200px] bg-center bg-cover"
	style="background-image: url('/food-placeholder.webp');"
>
	<a
		href="/"
		class="absolute top-0 letf-0 m-4 p-2 transition-all text-white hover:text-black hover:bg-white rounded-full"
	>
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
	<div>
		<h1 class="text-3xl font-bold">{recipe?.title}</h1>
		<hr class="mt-4" />
	</div>
	<div class="flex flex-col gap-8 text-center mx-auto md:mx-0">
		{#if recipe?.tags}
			<div class="flex flex-wrap gap-4">
				{#each recipe?.tags as tag}
					<span class="tag {getTagClass(tag)}">{getTagLabel(tag)}</span>
				{/each}
			</div>
		{/if}
		<div class="flex flex-row gap-2 text-center mx-auto md:mx-0">
			<div class="bg-blue-100 rounded-xl p-4 w-[120px] shadow-sm">
				<p>Préparation</p>
				<p class="font-bold">{recipe?.prepTime} min</p>
			</div>
			<div class="bg-red-100 rounded-xl p-4 w-[120px] shadow-sm">
				<p>Cuisson</p>
				<p class="font-bold">{recipe?.cookTime} min</p>
			</div>
			<div class="bg-red-100 rounded-xl p-4 w-[120px] shadow-sm flex items-center justify-center">
				<img src={getCookTypeIcon(recipe?.cookType)} alt={recipe?.cookType} class="w-10 h-10" />
			</div>
		</div>
	</div>
	<hr class="" />
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
