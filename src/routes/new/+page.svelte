<script lang="ts">
	let ingredientsCount = 1;
	let stepsCount = 1;
</script>

<form method="POST" action="?/new" class="flex flex-col gap-4 mb-8">
	<div class="flex flex-col gap-2">
		<label for="title">Nom de la recette</label>
		<input required type="text" name="title" class="w-full p-2 border border-gray-300 rounded-lg" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="people">Nombre de personnes</label>
		<input required type="number" name="people" class="w-full p-2 border border-gray-300 rounded-lg" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="prep-time">Temps de préparation</label>
		<input required type="number" name="prepTime" class="w-full p-2 border border-gray-300 rounded-lg" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="cook-time">Temps de cuisson</label>
		<input required type="number" name="cookTime" class="w-full p-2 border border-gray-300 rounded-lg" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="ingredients">Ingrédients</label>
		{#each Array.from({ length: ingredientsCount }) as _, i}
			<div class="flex gap-2 w-full">
				<input
                    required
					type="number"
					name="ingredientQty{i}"
					class="w-1/3 p-2 border border-gray-300 rounded-lg"
				/>
				<input
                    required
					type="text"
					name="ingredientLabel{i}"
					class="w-full p-2 border border-gray-300 rounded-lg"
				/>
			</div>
		{/each}
		<div class="flex flex-row justify-between">
			<button
				type="button"
				on:click={() => (ingredientsCount += 1)}
				class="w-fit text-blue-500 text-sm">Ajouter</button
			>
			{#if ingredientsCount > 1}
				<button
					type="button"
					on:click={() => (ingredientsCount -= 1)}
					class="w-fit text-red-500 text-sm">Supprimer le dernier</button
				>
			{/if}
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<label for="steps">Etapes</label>
		{#each Array.from({ length: stepsCount }) as _, i}
			<div class="flex gap-2 w-full">
				<input
                    required
					type="text"
					name="step{i}"
					class="w-full p-2 border border-gray-300 rounded-lg"
				/>
			</div>
		{/each}
		<div class="flex flex-row justify-between">
			<button type="button" on:click={() => (stepsCount += 1)} class="w-fit text-blue-500 text-sm">
				Ajouter
			</button>
			{#if stepsCount > 1}
				<button type="button" on:click={() => (stepsCount -= 1)} class="w-fit text-red-500 text-sm">
					Supprimer la dernière
				</button>
			{/if}
		</div>
	</div>
	<input
		type="submit"
		class="w-full p-2 bg-blue-500 text-white rounded-lg"
		value="Ajouter la recette"
	/>
</form>
