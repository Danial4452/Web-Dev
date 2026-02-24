import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list'; 
import { categories, products } from './data'; 
import { Product } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Online Store';
  categories = categories;
  allProducts = products; 
  selectedCategoryId: number | null = null;

 
  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  
  get filteredProducts(): Product[] {
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  
  handleRemove(productId: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}