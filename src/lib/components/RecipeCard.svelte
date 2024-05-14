<script lang="ts">
	export let recipe: Recipe;
</script>

<div class="flex flex-row items-start gap-4 bg-white rounded-xl p-2 shadow-sm">
	<img
		src="https://via.assets.so/img.jpg?w=200&h=200&tc=blue&bg=#cecece&t=Recipe"
		alt="Recipe"
		class="w-[150px] h-[150px] rounded-xl"
	/>
	<div class="flex flex-col gap-2">
		<h3 class="font-bold text-lg">{recipe.title}</h3>
		<div class="flex flex-row items-center mt-1 text-yellow-500">
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
					d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
			<p class="pl-1">{recipe.prepTime + recipe.cookTime} min</p>
		</div>
	</div>
</div>
