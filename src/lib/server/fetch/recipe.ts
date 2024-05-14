import type { Prisma } from '@prisma/client';
import { prisma } from '../prisma';

// export const getAllRecipes = async () => {
// 	await prisma.recipe.findMany();
// };

// export const getRecipe = async (id: number) => {};

export const createRecipe = async (payload: any) => {
	await prisma.recipe.create({
		data: {
			title: payload.title,
			people: payload.people,
			prepTime: payload.prepTime,
			cookTime: payload.cookTime,
			ingredients: payload.ingredients as Prisma.JsonArray,
			steps: payload.steps as Prisma.JsonArray
		}
	});
};
