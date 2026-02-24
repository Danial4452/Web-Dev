import { Category, Product } from './models';

export const categories: Category[] = [
  { id: 1, name: 'Техника' },
  { id: 2, name: 'Одежда' },
  { id: 3, name: 'Еда и продукты' },
  { id: 4, name: 'Услуги' }
];

export const products: Product[] = [
  // ТЕХНИКА (categoryId: 1) 
  {
    id: 1, 
    categoryId: 1, 
    name: 'iPhone 15 Pro', 
    price: 550000, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium', 
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000', 
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb черный ',
    rating: 4.9, 
    likes: 0
  },
  {
    id: 2,
    categoryId: 1, 
    name: 'Фен Dyson Supersonic',
    description: 'Возьми своей даме в каспи ред брат',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p54/pb4/68504233.jpg?format=gallery-medium', 
    price: 230000,
    rating: 5.0,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/dyson-supersonic-nural-hd16-fen-oranzhevyi-birjuzovyi-123109290/?c=750000000' 
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Игровая приставка Sony Playstation 5 Pro',
    description: 'PlayStation 5 Pro – это обновленная версия популярной консоли PS5, созданная для любителей самых современных технологий и производительности.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-medium',
    price: 450_000,
    rating: 4.8,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-pro-130061486/?c=750000000',
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Apple AirPods Max',
    description: 'Полноразмерные наушники с активным шумоподавлением и адаптивным эквалайзером.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
    price: 320000,
    rating: 4.8,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000'
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Ноутбук Apple MacBook Air 13 M3',
    description: 'Ноутбук Apple MacBook Air 13 M3 2024 13.6" / 16 Гб / SSD 256 Гб / macOS / MC8J4RU/A',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p7a/pe2/14344763.jpeg?format=gallery-medium',
    price: 550000,
    rating: 5.0,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m3-2024-13-6-16-gb-ssd-256-gb-macos-mc8j4ru-a-131762088/?c=750000000'
  },

  // ОДЕЖДА (categoryId: 2) 
  {
    id: 6, categoryId: 2, name: 'Valentino Garavani', 
    price: 4.499, 
    image: 'https://cdn-images.farfetch-contents.com/32/18/96/44/32189644_65524102_1000.jpg', 
    link: 'https://www.farfetch.com/kz/shopping/men/valentino-garavani-belted-trench-coat-item-32189644.aspx', 
    description: 'Belted trench coat',
    rating: 4.9,
    likes: 0,
    market: 'farfetch'
  },
  {
    id: 7, categoryId: 2, name: 'Chrome Hearts', 
    price: 3.799, 
    image: 'https://cdn-images.farfetch-contents.com/31/83/68/03/31836803_61415637_1000.jpg', 
    link: 'https://www.farfetch.com/kz/shopping/men/chrome-hearts--item-31836803.aspx', 
    description: 'цепочка на шею', 
    rating: 4.8, likes: 0
  },
  {
    id: 8, categoryId: 2, name: 'Maison Margiela Tabi', 
    price: 985, 
    image: 'https://cdn-images.farfetch-contents.com/20/62/29/73/20622973_50644406_1000.jpg', 
    link: 'https://www.farfetch.com/kz/shopping/men/maison-margiela-tabi-item-20622973.aspx', 
    description: 'лоферы Tabi, бежевые',
    rating: 4.8, likes: 0
  },
  {
    id: 9, categoryId: 2, name: 'adidas Moon Boot', 
    price: 239, 
    image: 'https://cdn-images.farfetch-contents.com/30/97/07/70/30970770_61763481_1000.jpg', 
    link: 'https://www.farfetch.com/kz/shopping/men/adidas-moon-boot-item-30970770.aspx', 
    description: 'стеганые ботинки на шнуровке из коллаборации с Moon Boot',
    rating: 4.8, likes: 0
  },
  {
    id: 10, categoryId: 2, name: 'Audemars Piguet Royal Oak Offshore Pre-owned 42', 
    price: 22.799, 
    image: 'https://cdn-images.farfetch-contents.com/28/07/15/72/28071572_57619057_1000.jpg', 
    link: 'https://www.farfetch.com/kz/shopping/men/audemars-piguet-royal-oak-offshore-pre-owned-42-item-28071572.aspx', 
    description: 'часы Royal Oak Offshore Pre-owned 42 от Audemars Piguet',
    rating: 4.8, likes: 0
  },

  // ЕДА (categoryId: 3) 
  {
    id: 11, categoryId: 3, name: 'Комбо чизбургер говядина', 
    price: 3200, 
    image: 'https://bahandi.kz/netcat_files/20/31/menu_cheese_burger_beef_550x550.jpeg.jpg', 
    link: 'https://bahandi.kz/', 
    description: 'Бургер с говяжей котлетой с сыром, порция картошки фри, напиток на выбор, соус на выбор', 
    rating: 5.0, likes: 0
  },
  {
    id: 12, categoryId: 3, name: 'Mangal Doner', 
    price: 3200, 
    image: 'https://imageproxy.wolt.com/menu/menu-images/693fe1a9c75afa026ac9651a/b0e32d30-0322-11f1-984b-c24d22686398_a777ff11d99703ae37d58e4deb435d1f.jpeg', 
    link: 'https://wolt.com/ru/kaz/almaty/restaurant/mangal-doner-pushkin/kurinyj-doner-kombo-itemid-680213df59b610d58720afde', 
    description: 'Куриный донер (Комбо)', 
    rating: 5.0, likes: 0
  },
  {
    id: 13, categoryId: 3, name: 'Dodo Pizza', 
    price: 4150, 
    image: 'https://media.dodostatic.net/image/r:1875x1875/11eeca3858c79a01b7a644c5a5d81524.avif', 
    link: 'https://dodopizza.kz/almaty/000000c3-0000-0000-0000-000000000000/product/pepperoni-serdce', 
    description: 'Пепперони-сердце', 
    rating: 5.0, likes: 0
  },
  {
    id: 14, categoryId: 3, name: 'Чудо сырок', 
    price: 405, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf1/pa5/54563860.png?format=gallery-medium', 
    link: 'https://kaspi.kz/shop/p/chudo-syrok-kokosovyi-28-7-40-g-100237353/?c=750000000', 
    description: 'Чудо сырок кокосовый 28.7% 40 г', 
    rating: 5.0, likes: 0
  },
  {
    id: 15, categoryId: 3, name: 'Adal молоко', 
    price: 750, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/p6d/52077494.png?format=gallery-medium', 
    link: 'https://kaspi.kz/shop/p/adal-moloko-3-2-925-ml-100982670/?c=750000000', 
    description: 'Adal молоко 3.2% 925 мл', 
    rating: 5.0, likes: 0
  },


  // УСЛУГИ (categoryId: 4)
  {
    id: 16, categoryId: 4, name: 'Фотосессия', price: 25000, 
    image: 'https://cdn-obyavleniya.kaspi.kz/webp/6c/6c879d02-606f-475f-b775-b30c3423796c/2-full.webp', 
    link: 'https://obyavleniya.kaspi.kz/a/fotograf-fotosessiya-v-studii-semeynaya-individualnaya-dlya-instagrama-109972149/', 
    description: 'Фотограф Фотосессия в студии семейная индивидуальная для инстаграма', 
    rating: 4.8, likes: 0
  },
  {
    id: 17, categoryId: 4, name: 'Сварщик', price: 15000, 
    image: 'https://cdn-obyavleniya.kaspi.kz/webp/ec/ec152777-653e-4a03-b460-287a30cddb52/1-full.webp', 
    link: 'https://obyavleniya.kaspi.kz/a/svarschik-na-vyiezd-118325990', 
    description: 'Сварщик на выезд', 
    rating: 4.2, likes: 0
  },
  {
    id: 18, categoryId: 4, name: 'Ремонт', price: 3000, 
    image: 'https://cdn-obyavleniya.kaspi.kz/webp/46/46813cc5-0f3c-4af0-85c7-0bb2beffd51c/5-full.webp', 
    link: 'https://obyavleniya.kaspi.kz/a/remont-i-zamena-filtra-dlya-vodyi-110056936', 
    description: 'Ремонт и замена фильтра для воды', 
    rating: 4.72, likes: 0
  },
  {
    id: 19, categoryId: 4, name: 'Накрутка подписчиков', price: 99, 
    image: 'https://cdn-obyavleniya.kaspi.kz/webp/a8/a82a426d-62f9-4936-a743-8715a00ec0c7/1-full.webp', 
    link: 'https://obyavleniya.kaspi.kz/a/nakrutka-podpischikov-laykov-instagram-tiktok-youtube-113568788', 
    description: 'Накрутка подписчиков Laykov Instagram TikTok YouTube', 
    rating: 4, likes: 0
  },
  {
    id: 20, categoryId: 4, name: 'Профессиональный таргетолог', price: 200000, 
    image: 'https://cdn-obyavleniya.kaspi.kz/webp/ba/bafb62ff-b27b-4f23-a00b-36610d5093e6/1-full.webp', 
    link: 'https://obyavleniya.kaspi.kz/a/professionalnyiy-targetolog-113704127', 
    description: 'Профессиональный таргетолог', 
    rating: 4.8, likes: 0
  },

];