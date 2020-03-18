import { Component, ViewChild } from '@angular/core';
import { CategorySelectionService } from '../../services/category-selection.service';
import { Category } from '../../models/category.model';

@Component({
	selector: 'app-pop-over',
	templateUrl: './pop-over.component.html',
	styleUrls: ['./pop-over.component.scss']
})
export class PopOverComponent {

	// hasSelections: boolean;
	categorySelections: Array<Category>;

	constructor(
		private catSelectService: CategorySelectionService
	) { 

		this.categorySelections = this.catSelectService.getCategories().map((category: string) => {
			return {
				name: category,
				selected: false,
				items: this.catSelectService.getItemsByCategory(category).map((item: string) => {
					return {
						name: item,
						count: 0
					}
				})
			};
		});
	}

	updateCategory(updatedCategory: Category): void {
		const updatedIndex = this.categorySelections
			.findIndex((category: Category) => category.name === updatedCategory.name);

		this.categorySelections.splice(updatedIndex, 1,  { ...updatedCategory } );
	}

	toggleSelected(category: Category, event: Event): void {
		category.selected = !category.selected;

		event.stopPropagation();
	}
}
