import { Component, Input, OnInit } from '@angular/core'; 
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;

  // в большой рамке
  selectedImage: string = '';

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  // Метод для переключения картинок в галерее
  changeImage(img: string) {
    this.selectedImage = img;
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