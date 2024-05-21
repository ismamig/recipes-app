import { createRecipe } from '$lib/server/fetch/recipe.js';

export const actions = {
	new: async (event) => {
		const data = await event.request.formData();
		const formData = Object.fromEntries([...data.entries()]);

		const ingredients: Ingredient[] = [];
		let index = 0;

		while (formData[`ingredientQty${index}`] && formData[`ingredientLabel${index}`]) {
			ingredients.push({
				qty: formData[`ingredientQty${index}`].toString(),
				label: formData[`ingredientLabel${index}`].toString()
			});
			index++;
		}

		const steps: string[] = [];
		index = 0;

		while (formData[`step${index}`]) {
			steps.push(formData[`step${index}`].toString());
			index++;
		}

		const tags = formData.tags ? formData.tags.toString().split(',') : [];

        const payload = {
					title: formData.title,
					people: parseInt(formData.people.toString()),
					prepTime: parseInt(formData.prepTime.toString()),
					cookTime: parseInt(formData.cookTime.toString()),
					ingredients,
					steps,
					tags
				};

        try {
			console.log(payload.tags)
            await createRecipe(payload);
            console.log('Recipe created')
        } catch (error) {
            console.log(error)
            return {
                status: 500,
                body: {
                    message: 'Failed to create recipe'
                }
            }
        }

        return {
            status: 200,
            body: {
                message: 'Recipe created'
            }
        }
	}
};
