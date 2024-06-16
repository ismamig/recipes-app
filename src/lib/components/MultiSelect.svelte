<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let options: { value: string; label: string }[] = [];
	export let selected: string[] = [];

	const dispatch = createEventDispatcher();

	function toggleSelection(optionValue: string) {
		if (selected.includes(optionValue)) {
			selected = selected.filter((value) => value !== optionValue);
		} else {
			selected = [...selected, optionValue];
		}
		dispatch('change', { selected });
	}
</script>

<div>
	{#each options as option}
		<div
			class="tag {selected.includes(option.value) ? 'selected' : ''}"
			on:click={() => toggleSelection(option.value)}
		>
			{option.label}
		</div>
	{/each}
</div>

<style>
	.tag {
		display: inline-block;
		padding: 0.5em 1em;
		border: 1px solid #ccc;
		border-radius: 20px;
		cursor: pointer;
		margin: 0.5em;
	}

	.tag.selected {
		background-color: #007bff;
		color: white;
	}
</style>
