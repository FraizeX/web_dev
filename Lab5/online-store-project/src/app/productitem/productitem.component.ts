import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../data';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css',
  imports: [CommonModule],

})
export class ProductItemComponent {
  // Получает данные продукта от родительского компонента
  @Input() product!: Product;
  // Выбрасывает событие удаления с id продукта
  @Output() remove = new EventEmitter<number>();
  // Выбрасываем событие лайка (можно использовать для дополнительной логики)
  @Output() like = new EventEmitter<void>();

  // Вызывается при клике на кнопку Like
  likeProduct(): void {
    this.like.emit();
  }

  // Вызывается при клике на кнопку Remove; отправляет id продукта родителю
  removeProduct(): void {
    this.remove.emit(this.product.id);
  }

  // перенаправляет пользователя в WhatsApp или Telegram с ссылкой на товар
  shareProduct(platform: string): void {
    const url = encodeURIComponent(this.product.link);
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}`;
    }
    window.open(shareUrl, '_blank');
  }
}
