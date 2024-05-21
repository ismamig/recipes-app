<script lang="ts">
	import MultiSelect from '$lib/components/MultiSelect.svelte';
	import { tags } from '$lib/tags';

	let ingredientsCount = 1;
	let stepsCount = 1;
	let selectedTags: string[] = [];

	function handleTagChange(event) {
		selectedTags = event.detail.selected;
	}
</script>

<form
	method="POST"
	action="?/new"
	class="flex flex-col gap-4 px-4 mb-8"
	on:submit={() => {
		// Add selected tags to the form as a comma-separated string
		const tagsInput = document.createElement('input');
		tagsInput.type = 'hidden';
		tagsInput.name = 'tags';
		tagsInput.value = selectedTags.join(',');
		event.target.appendChild(tagsInput);
	}}
>
	<div class="flex flex-col gap-2">
		<label for="title">Nom de la recette</label>
		<input required type="text" name="title" class="w-full p-2 border border-gray-300 rounded-lg" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="people">Nombre de personnes</label>
		<input
			required
			type="number"
			name="people"
			class="w-full p-2 border border-gray-300 rounded-lg"
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="prep-time">Temps de préparation <b>(min)</b></label>
		<input
			required
			type="number"
			name="prepTime"
			class="w-full p-2 border border-gray-300 rounded-lg"
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="cook-time">Temps de cuisson <b>(min)</b></label>
		<input
			required
			type="number"
			name="cookTime"
			class="w-full p-2 border border-gray-300 rounded-lg"
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="cook-type">Type de cuisson</label>
		<select name="cookType" required class="w-full p-2 border border-gray-300 rounded-lg">
			<option value="FOUR">Four</option>
			<option value="POELE">Poêle</option>
			<option value="AUTRE">Autre</option>
		</select>
	</div>
	<div class="flex flex-col gap-2">
		<label for="ingredients">Ingrédients <b>(quantité, nom)</b></label>
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
	<div>
		<label for="tags">Tags</label>
		<MultiSelect options={tags} bind:selected={selectedTags} on:change={handleTagChange} />
	</div>
	<input
		type="submit"
		class="w-full p-2 bg-blue-500 text-white rounded-lg"
		value="Ajouter la recette"
	/>
</form>
