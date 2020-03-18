import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges} from '@angular/core';
import { Category } from '../../models/category.model';
import { MatMenuTrigger } from '@angular/material/menu';
import { CategoryItem } from 'src/app/models/category-item.model';
import { cloneDeep, sumBy } from 'lodash';

@Component({
	selector: 'app-quantity-counter',
	templateUrl: './quantity-counter.component.html',
	styleUrls: ['./quantity-counter.component.scss']
})
export class QuantityCounterComponent implements OnInit, OnChanges {
	@ViewChild("matMenuTrigger") menuTrigger: MatMenuTrigger;
	
	@Input() category: Category;
	@Output() doneEditing: EventEmitter<Category>;

	edited: boolean;
	categoryCount: number;
	editCategory: Category;

	constructor() { 
		this.doneEditing = new EventEmitter<Category>();
	}

	ngOnInit(): void {
		this.init();
	}

	init(): void {
		this.edited = false;
		this.editCategory = cloneDeep(this.category);
	}

	updateItem(item: CategoryItem, delta: number, event: Event): void {
		item.count += delta;
		this.edited = true;
		event.stopPropagation();
	}

	done(): void {
		this.doneEditing.emit(this.editCategory);
	}

	ngOnChanges(): void {
		this.categoryCount = sumBy(this.category.items, (item: CategoryItem) => {
			return item.count;
		});
	}
}
