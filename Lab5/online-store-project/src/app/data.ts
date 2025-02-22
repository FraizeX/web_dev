export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  likes: number;
  link: string;
  gallery?: string[];
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
}

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'TVs' }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-large',
    name: 'Apple iPhone 13 128GB Blue',
    description: 'Experience the next level of smartphone technology with the Apple iPhone 13.',
    rating: 4.8,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64206207352862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=gallery-medium'
    ],
    categoryId: 1
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h44/64145784373278.jpg?format=gallery-large',
    name: 'Samsung Galaxy S21 5G 128GB',
    description: 'Innovative performance with 5G connectivity and advanced camera system.',
    rating: 4.6,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-6-gb-128-gb-seryi-103394241/',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h2b/h20/64145794498590.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h98/h80/64145800036382.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h80/h6c/64145793024030.jpg?format=gallery-medium'
    ],
    categoryId: 1
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h31/63981677543454.jpg?format=gallery-large',
    name: 'Xiaomi Redmi Note 10 Pro 6GB/128GB',
    description: 'A powerful smartphone with an impressive display and camera.',
    rating: 4.5,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-6-gb-128-gb-seryi-101424997/',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/he8/63981690290206.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha1/h88/63981701267486.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h63/h41/63981707100190.jpg?format=gallery-medium'
    ],
    categoryId: 1
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h1b/64212919156766.jpg?format=gallery-medium',
    name: 'Lenovo ThinkPad E14',
    description: 'Reliable performance and business-grade security for professionals.',
    rating: 4.7,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-e14-20ras0fp00-chernyi-101174810/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h85/h10/64212954120222.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h9c/64212956905502.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h29/h2b/64212958806046.jpg?format=gallery-medium'
    ],
    categoryId: 2
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/pa1/6397816.jpg?format=gallery-medium',
    name: 'LG 55" 4K Smart TV',
    description: 'Enjoy stunning visuals with the LG 55" 4K Smart TV, perfect for home entertainment.',
    rating: 4.4,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/lg-55ut91006la-140-sm-chernyi-120456738/',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/pe9/pa3/6397821.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p22/pa4/6397823.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3e/pa4/6397824.jpg?format=gallery-medium'
    ],
    categoryId: 4
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h91/63846157942814.jpg?format=gallery-medium',
    name: 'HP Pavilion Gaming Laptop 15-dk',
    description: 'High-performance gaming laptop with immersive graphics and advanced cooling.',
    rating: 4.3,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/hp-pavilion-gaming-15-dk0015ur-7gm62ea-chernyi-100154167/?c=710000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/hcc/63846161154078.jpg?format=gallery-medium',
      'https://avatars.mds.yandex.net/get-mpic/5207395/img_id4245186879348772666.jpeg/orig',
      'https://avatars.mds.yandex.net/i?id=5fa100672bd197a30e082be0df6aad2f_l-10354750-images-thumbs&n=13'
    ],
    categoryId: 2
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
    name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
    description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. Сейчас это единственный смартфон Самсунг с технологией бесшовного обновления – больше не нужно ждать, пока обновится Android. A55 предлагает доступную цену, интересный дизайн с гармонией стекла и металла и почти флагманские характеристики, что чаще встречается среди китайских конкурентов.',
    rating: 4.9,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/h7b/85428543750174.jpg?format=gallery-medium'
    ],
    categoryId: 1
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
    name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
    description: 'Capture stunning photos with this beginner-friendly DSLR camera from Nikon.',
    rating: 4.6,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium'
    ],
    categoryId: 1
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
    name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
    description: 'Comfortable and stylish running shoes designed for performance and durability.',
    rating: 4.2,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8e/h0c/64509330030622.jpg?format=gallery-medium'
    ],
    categoryId: 2
  },
  {
    id: 10,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
    name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro',
    description: 'Ноутбук Thunderobot представляет собой мощный инструмент для игр и продакшена, который сочетает в себе передовые технологии и высокую производительность. Этот ноутбук разработан специально для пользователей, которым требуется надежное и эффективное устройство для выполнения самых сложных задач и наслаждения современными играми.',
    rating: 4.0,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb9/86274830204958.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h36/h1f/86274830270494.jpg?format=gallery-medium'
    ],
    categoryId: 2
  },
  {
    id: 11,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h46/h90/85949426794526.png?format=gallery-medium',
    name: 'Ноутбук ASUS TUF Gaming A15',
    description: 'Ноутбук TUF Gaming A15 представляет собой особо надежную геймерскую платформу, которая поможет вам добиться победы в любой игре. Гарантируют высокую скорость и плавное изображение на IPS-дисплее с частотой обновления до 144 Гц. Эффективная система охлаждения с функцией самоочистки гарантирует стабильность под высокими нагрузками, что в сочетании с особой прочностью, характеризующей всю серию TUF, делает данный ноутбук прекрасным выбором для геймеров, которые постоянно находятся в движении.',
    rating: 4.7,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-15-6-16-gb-ssd-512-gb-bez-os-fa506nc-hn065-90nr0jf7-m005f0-119121191/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/he0/h9b/85949426860062.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h00/h0d/85949426925598.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h68/hd2/85949426991134.png?format=gallery-medium'
    ],
    categoryId: 2
  },
  {
    id: 12,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h7b/86276597415966.jpg?format=gallery-medium',
    name: 'Телевизор LG 55UT80006LA 140 см черный',
    description: 'Телевизор LED LG 55UT80006LA сочетает стильный минималистский дизайн и высокое качество изображения для увлекательного просмотра. В нем установлен экран 55 дюймов с подсветкой Direct LED и разрешением UltraHD, который позволяет получать удовольствие от реалистичной картинки.',
    rating: 4.3,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/lg-55ut80006la-140-sm-chernyi-120393130/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/ha4/86276597481502.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/hc3/86276597547038.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h9f/86276597284894.jpg?format=gallery-medium'
    ],
    categoryId: 4
  },
  {
    id: 13,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/pc4/25408367.jpg?format=gallery-medium',
    name: 'Телевизор Яндекс YNDX-00075 127 см черный',
    description: 'Яндекс ТВ Станция Бейсик YNDX-00075 — это телевизор и музыкальная Станция в одном корпусе. Диагональ экрана 50” (127 см).\n' +
      'Выбирайте контент, управляйте громкостью и переключайте каналы голосом без пульта. Алиса услышит и распознает команду благодаря чувствительным микрофонам и функции Farfield.',
    rating: 4.7,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/jandeks-yndx-00075-127-sm-chernyi-131893133/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/p54/pc7/25408373.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa9/pc7/25408376.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe1/pc7/25408378.jpg?format=gallery-medium'
    ],
    categoryId: 4
  },
  {
    id: 14,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h75/86416093118494.jpg?format=gallery-medium',
    name: 'Телевизор Xiaomi A 2025 L43MA-AURU 109 см черный',
    description: 'Изображение со сверхвысоким разрешением 4K\n' +
      '\n' +
      'Благодаря нашему дисплею с разрешением 3840 x 2160 пикселей, на котором важна каждая деталь, вы сможете насладиться необычайной четкостью изображения. Насладитесь красотой, заключенной в мельчайших деталях',
    rating: 4.8,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/xiaomi-a-2025-l43ma-auru-109-sm-chernyi-120935278/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/h1c/86416093249566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hff/h6f/86416093315102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h89/h75/86416093118494.jpg?format=gallery-medium'
    ],
    categoryId: 4
  },
  {
    id: 15,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h99/64347744862238.jpg?format=gallery-medium',
    name: 'Телевизор Samsung UE65AU7100UXCE 165 см черный',
    description: 'Интеллектуальный апскейлинг до 4K, позволит вам смотреть ваш любимый контент с более низким разрешением в сверхчетком разрешении 4К. Кроме того, благодаря улучшенной технологии обработки цвета, вы получите удовольствие от реалистичной цветопередачи.',
    rating: 4.1,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/samsung-ue65au7100uxce-165-sm-chernyi-101475922/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf7/64347747680286.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h68/hf4/64347750432798.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h50/h04/64347753545758.jpg?format=gallery-medium'
    ],
    categoryId: 4
  },
  {
    id: 16,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
    name: 'Наушники Apple AirPods 4 Active Noise Cancellation белый',
    description: 'AirPods 4 оснащены функцией активного шумоподавления, что позволяет эффективно снижать уровень окружающего шума. Чип H2 и улучшенные микрофоны помогают уменьшить низкочастотные звуки, такие как шум самолетов, системы вентиляции или городской трафик, до того, как они достигнут ваших ушей.',
    rating: 4.7,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium',
      'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-10/315/810/784/231/140/600017440844b1.jpg'
    ],
    categoryId: 3
  },
  {
    id: 17,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
    name: 'Наушники Marshall Major IV черный',
    description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров. В основе данной модели используются динамические излучатели с диаметром мембраны 40 мм, что в совокупности с широким диапазоном частот и высокой чувствительностью может обеспечить качественное и насыщенное звучание. Кроме того, наушники оборудованы микрофоном, благодаря чему могут также использоваться для телефонных переговоров. Подключение к устройствам в данной модели может осуществляться как проводным, так и беспроводным способом – при помощи энергоэффективного протокола Bluetooth 5.0. Еще одной особенностью является большой аккумулятор, который может обеспечить до 80 часов воспроизведения.',
    rating: 5.0,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p08/pc5/17680143.jpg?format=gallery-medium'
    ],
    categoryId: 3
  },
  {
    id: 18,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h98/64136271331358.jpg?format=gallery-medium',
    name: 'Наушники Razer Blackshark V2 X черный',
    description: 'Сразитесь со врагами в легкой киберспортивной гарнитуре, раскрывающую свои преимущества под давлением. Представляем Razer BlackShark V2 X - тройная угроза за счет восхитительного звучания, превосходной чистоты микрофона и звукоизоляции высокого качества, подтвержденными про-игроками.',
    rating: 4.7,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/razer-blackshark-v2-x-chernyi-100934284/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8b/h67/64136274280478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h69/h24/64136374943774.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h56/hf7/64136377663518.jpg?format=gallery-medium'
    ],
    categoryId: 3
  },
  {
    id: 19,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
    name: 'Наушники Apple AirPods Max 2 черно-синий',
    description: 'Модель автоматически умеет определять, когда нужно отключить шумоподавление. За счет излучателей большого диаметра наушники выдают громкий звук с хорошим балансом частот. Пространственный звук создается благодаря динамическому отслеживанию положения головы пользователя',
    rating: 4.9,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-2-cherno-sinii-128622804/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/p10/3532808.png?format=gallery-medium'
    ],
    categoryId: 3
  },
  {
    id: 20,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
    name: 'Наушники Sony WH-1000XM4 черный',
    description: 'Узнайте, как наушники WH-1000XM4 совмещают в себе нашу лучшую технологию шумоподавления, исключительное качество звука и целый ряд интеллектуальных функций',
    rating: 4.1,
    likes: 0,
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p9c/pde/11569144.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb8/pde/11569145.jpg?format=gallery-medium'
    ],
    categoryId: 3
  }
];
