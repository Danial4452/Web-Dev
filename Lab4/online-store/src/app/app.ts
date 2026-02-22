import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Добавь это сюда
  templateUrl: './app.html',       // или app.component.html
  styleUrls: ['./app.css']         // или app.component.css
})
export class AppComponent {
  title = 'online-store';
}