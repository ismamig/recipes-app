export const tags = [
	{ value: '1-meat', label: 'Viande' },
	{ value: '1-fish', label: 'Poisson' },
	{ value: '1-veggie', label: 'Végétarien' },
	{ value: '1-vegan', label: 'Végan' },
	{ value: '2-starter', label: 'Entrée' },
	{ value: '2-dish', label: 'Plat' },
	{ value: '2-dessert', label: 'Dessert' },
	{ value: '2-beverage', label: 'Boisson' },
	{ value: '3-share', label: 'A partager' },
	{ value: '3-fast', label: 'Rapide à faire' }
];

// Function to get the label of a tag based on its value
export function getTagLabel(tagValue: string) {
	const tag = tags.find((t) => t.value === tagValue);
	return tag ? tag.label : tagValue;
}

// Function to get the type of a tag based on its value
function getTagType(tagValue: string) {
	return tagValue.split('-')[0];
}

// Function to get the CSS class for a tag based on its type
export function getTagClass(tagValue: string) {
	const type = getTagType(tagValue);
	switch (type) {
		case '1':
			return 'bg-red-200';
		case '2':
			return 'bg-green-200';
		case '3':
			return 'bg-blue-200';
		default:
			return 'bg-gray-200';
	}
}
