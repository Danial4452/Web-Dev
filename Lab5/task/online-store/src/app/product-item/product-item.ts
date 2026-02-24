import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Product } from '../models'; 

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product; 
  @Output() delete = new EventEmitter<number>(); 


  like() {
    this.product.likes++;
  }


  remove() {
    this.delete.emit(this.product.id);
  }


  share(platform: string) {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри этот товар: ${this.product.name}`);
    
    if (platform === 'wa') {
      window.open(`https://wa.me/?text=${text}%20${url}`);
    } else if (platform === 'tg') {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`);
    }
  }
}