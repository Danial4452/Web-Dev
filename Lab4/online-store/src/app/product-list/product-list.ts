import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item'; 
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [
    // 1. IPHONE 
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Титановый корпус, мощный процессор A17 Pro и топовая камера.',
      price: 550000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/86302548557854.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/h70/86319885713438.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h33/86319885680670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/he7/86319885811742.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/?c=750000000'
    },
    // 2. ДРЕЛЬ
    {
      id: 2,
      name: 'Ударная дрель-шуруповерт',
      description: 'Мощный инструмент для домашнего ремонта и профессиональных работ.',
      price: 25000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7c/pe6/53232790.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p21/p1e/54221696.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p05/p1e/54221697.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p4a/p2c/54221700.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/alteco-drel--shurupovert-cd-21-35-73508-21-v-123156343/?c=750000000'
    },
    // 3. КОЛА 0.5
    {
      id: 3,
      name: 'Coca-Cola Classic 0.5 л',
      description: 'Классический освежающий напиток, знакомый каждому.',
      price: 390,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/pee/97763097.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p0f/p3c/56292444.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p52/pda/22103767.jpg?format=gallery-medium',],
      link: 'https://kaspi.kz/shop/p/coca-cola-gazirovannyi-napitok-0-5-l-100208092/?c=750000000'
    },
    // 4. ФУТБОЛКА BALENCIAGA
    {
      id: 4,
      name: 'Футболка Balenciaga Oversize',
      description: 'Стильная брендовая футболка из качественного хлопка.',
      price: 150000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa7/p48/29051448.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p42/pb6/27930107.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p5e/pb6/27930108.png?format=gallery-medium',],
      link: 'https://kaspi.kz/shop/p/futbolka-b-lenciaga-mb-t-sh-000-chernyi-4xl-135660908/?c=750000000'
    },
    // 5. ЯГЕРМЕЙСТЕР
    {
      id: 5,
      name: 'Ликер Jägermeister 0.7 л',
      description: 'Знаменитый немецкий травяной ликер с уникальным вкусом.',
      price: 9500,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p6f/86034005.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p9b/p43/74582859.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p5c/p46/74582863.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p46/74582868.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/liker-jagermeister-desertnyi-35-0-7-l-102074820/?c=750000000'
    },
    // 6. КРЕАТИН
    {
      id: 6,
      name: 'Креатин моногидрат 300г',
      description: 'Спортивная добавка для повышения выносливости и силы.',
      price: 7000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p57/p04/86602276.jpeg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/86475803.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p0c/86475805.png?format=gallery-medium',],
      link: 'https://kaspi.kz/shop/p/kreatin-yummylab-creatine-monohydrate-neitral-nyi-300-g-117779595/?c=750000000'
    },
    // 7. AIRPODS MAX
    {
      id: 7,
      name: 'Apple AirPods Max',
      description: 'Полноразмерные наушники с активным шумоподавлением и премиальным звуком.',
      price: 320000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h76/h33/64145012654110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h18/64145015734302.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h78/hc9/64145018355742.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000'
    },
    // 8. КОРМ ФЕЛИКС
    {
      id: 8,
      name: 'Корм для кошек Felix 75г',
      description: 'Вкусные кусочки в сочном желе, которые обожает ваш кот.',
      price: 220,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf8/h5b/84564384677918.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h6c/86904007819294.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h06/86904007884830.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/felix-appetitnye-kusochki-v-zhele-govjadina-75-g-1-sht-107965425/?c=750000000'
    },
    // 9. PS5
    {
      id: 9,
      name: 'PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с поддержкой 4K и быстрой загрузкой.',
      price: 303623,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    // 10. ФУТБОЛКА РОНАЛДУ
    {
      id: 10,
      name: 'Футболка Al-Nassr Ronaldo #7',
      description: 'Игровая джерси легендарного Криштиану Роналду.',
      price: 15000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/pd8/29066397.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p63/p56/7916163.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p76/pe8/23394105.jpeg?format=gallery-medium',],
      link: 'https://kaspi.kz/shop/p/komplekt-kafd1-fk-al--nasr-ronaldo-sinii-140-129928325/?c=750000000'
    }
  ];
}