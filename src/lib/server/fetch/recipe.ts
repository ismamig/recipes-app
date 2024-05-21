import type { Prisma } from '@prisma/client';
import { prisma } from '../prisma';

export const getAllRecipes = async () => {
	return await prisma.recipe.findMany();
};

export const getLastRecipes = async (limit: number) => {
	return await prisma.recipe.findMany({
		take: limit,
		orderBy: {
			createdAt: 'desc'
		}
	});
};

export const getRecipe = async (id: number) => {
	return await prisma.recipe.findUnique({
		where: {
			id
		}
	});
};

export const createRecipe = async (payload: any) => {
	await prisma.recipe.create({
		data: {
			title: payload.title,
			people: payload.people,
			prepTime: payload.prepTime,
			cookTime: payload.cookTime,
			ingredients: payload.ingredients as Prisma.JsonArray,
			steps: payload.steps as Prisma.JsonArray,
			tags: payload.tags
		}
	});
};
