import { getRecipe } from '$lib/server/fetch/recipe';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	let recipe: Recipe;

	try {
		recipe = await getRecipe(parseInt(params.id));
	} catch (error) {
		return {
			status: 500,
			error: new Error('Failed to fetch recipe')
		};
	}
	return { recipe };
}) satisfies PageServerLoad;
