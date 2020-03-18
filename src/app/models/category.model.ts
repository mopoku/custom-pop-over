import { CategoryItem } from './category-item.model';

export interface Category {
    name: string;
    selected: boolean;
    items: Array<CategoryItem>;
}