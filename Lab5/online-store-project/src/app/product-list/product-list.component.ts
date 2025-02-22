import { Component, Input } from '@angular/core';
import { Product, PRODUCTS } from '../data';
import {ProductItemComponent} from '../productitem/productitem.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, ProductItemComponent]
})
export class ProductListComponent {
  // Принимает id выбранной категории от родительского компонента
  @Input() categoryId!: number;

  // Геттер возвращает отфильтрованный список продуктов по категории
  get products(): Product[] {
    return PRODUCTS.filter(product => product.categoryId === this.categoryId);
  }

  // Метод удаления продукта по его id
  removeProduct(productId: number): void {
    const index = PRODUCTS.findIndex(p => p.id === productId);
    if (index !== -1) {
      PRODUCTS.splice(index, 1);
    }
  }

  // Метод увеличивает количество лайков у продукта
  likeProduct(product: Product): void {
    product.likes++;
  }
}
