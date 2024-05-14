import { getLastRecipes } from '$lib/server/fetch/recipe';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	let recipes: Recipe[];
	try {
		recipes = await getLastRecipes(5);
	} catch (error) {
		return {
			status: 500,
			error: new Error('Failed to fetch recipes')
		};
	}
	return {
		recipes
	};
}) satisfies PageServerLoad;
