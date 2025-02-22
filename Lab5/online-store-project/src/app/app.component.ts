import { Component } from '@angular/core';
import { CATEGORIES, Category } from './data';
import { ProductListComponent} from './product-list/product-list.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ProductListComponent]
})
export class AppComponent {
  // Список категорий из данных
  categories: Category[] = CATEGORIES;
  // Хранит идентификатор выбранной категории (изначально 0)
  selectedCategoryId: number | null = null;

  // сохраняю id, если выбрал категорию
  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }
}
