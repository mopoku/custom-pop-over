import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CategorySelectionService {

	private readonly categoryItems = {
		"categories": {
		"fruits": ["Orange", "Banana", "Apple", "Watermelon"],
		"vegetables": ["Tomato", "Cucumber", "Lettuce","Carrot"],
		"beverages": ["Spring Water", "Soft Drink","Lemon Juice"],
		"snacks": ["Cake", "Popcorn", "Chocolate", "Cookie"]
		}
	 };

	constructor() { }

	getCategories(): Array<string> {
		return Object.keys(this.categoryItems.categories);
	}

	getItemsByCategory(category: string): Array<string> {
		return this.categoryItems.categories[category];
	}
}
