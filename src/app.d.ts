// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from "@prisma/client";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	var prisma: PrismaClient;
	interface Ingredient {
		qty: string;
		label: string;
	};
	interface Recipe {
		id: number;
		title: string;
		people: number;
		prepTime: number;
		cookTime: number;
		cookType: string;
		ingredients: Ingredient[];
		steps: string[];
		tags: string[];
	}
}

export {};
