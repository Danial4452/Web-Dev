export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;      // Главное фото
  images: string[];   // Массив для галереи (минимум 3 ссылки)
  link: string;       // Ссылка на Kaspi
}