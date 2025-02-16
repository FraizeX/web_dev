import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery?: string[];
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-large',
      name: 'Apple iPhone 13 128GB Blue',
      description: 'Experience the next level of smartphone technology with the Apple iPhone 13.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64206207352862.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h44/64145784373278.jpg?format=gallery-large',
      name: 'Samsung Galaxy S21 5G 128GB',
      description: 'Innovative performance with 5G connectivity and advanced camera system.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-6-gb-128-gb-seryi-103394241/',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h20/64145794498590.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/h80/64145800036382.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/h6c/64145793024030.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h31/63981677543454.jpg?format=gallery-large',
      name: 'Xiaomi Redmi Note 10 Pro 6GB/128GB',
      description: 'A powerful smartphone with an impressive display and camera.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-6-gb-128-gb-seryi-101424997/',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/he8/63981690290206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/h88/63981701267486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h41/63981707100190.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h1b/64212919156766.jpg?format=gallery-medium',
      name: 'Lenovo ThinkPad E14',
      description: 'Reliable performance and business-grade security for professionals.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-e14-20ras0fp00-chernyi-101174810/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h85/h10/64212954120222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/h9c/64212956905502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h29/h2b/64212958806046.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/pa1/6397816.jpg?format=gallery-medium',
      name: 'LG 55" 4K Smart TV',
      description: 'Enjoy stunning visuals with the LG 55" 4K Smart TV, perfect for home entertainment.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/lg-55ut91006la-140-sm-chernyi-120456738/',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe9/pa3/6397821.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p22/pa4/6397823.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3e/pa4/6397824.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h91/63846157942814.jpg?format=gallery-medium',
      name: 'HP Pavilion Gaming Laptop 15-dk',
      description: 'High-performance gaming laptop with immersive graphics and advanced cooling.',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/hp-pavilion-gaming-15-dk0015ur-7gm62ea-chernyi-100154167/?c=710000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/hcc/63846161154078.jpg?format=gallery-medium',
        'https://avatars.mds.yandex.net/get-mpic/5207395/img_id4245186879348772666.jpeg/orig',
        'https://avatars.mds.yandex.net/i?id=5fa100672bd197a30e082be0df6aad2f_l-10354750-images-thumbs&n=13'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h0a/63778940780574.jpg?format=gallery-medium',
      name: 'Bose QuietComfort 35 II',
      description: 'Wireless noise-cancelling headphones with superior sound quality.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-35-ii-serebristyi-4803077/?c=351010000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/he6/ha7/63778941435934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h97/ha8/63778942222366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h33/hbb/63778942943262.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/hc5/63783315701790.jpg?format=gallery-medium',
      name: 'Nikon D3500 DSLR Camera',
      description: 'Capture stunning photos with this beginner-friendly DSLR camera from Nikon.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/nikon-d3500-kit-18-55-vr-af-p-2240124/',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h6d/63783316357150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h99/h0f/63783316684830.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h9f/63783317471262.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha8/hef/87166074683422.jpg?format=gallery-medium',
      name: 'Adidas Running Shoes',
      description: 'Comfortable and stylish running shoes designed for performance and durability.',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/krossovki-adidas-galaxy-7-running-shoes-galaxy-7-running-shoes-rozovyi-39-123747603/?c=353220100',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/h60/87166074748958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h73/87166074814494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/had/87166074880030.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h10/63765730099230.jpg?format=gallery-medium',
      name: 'Bosch Kitchen Blender 500W',
      description: 'Efficient and versatile kitchen blender, perfect for smoothies and more.',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/bosch-msm66155-belyi-3100073/?c=353220100',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h9f/63765730885662.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h17/63765731344414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/he3/63765732261918.jpg?format=gallery-medium'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  // Redirects user to Whatsapp or Telegram with the product link
  shareProduct(product: Product, platform: string): void {
    const url = encodeURIComponent(product.link);
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}`;
    }
    window.open(shareUrl, '_blank');
  }
}
