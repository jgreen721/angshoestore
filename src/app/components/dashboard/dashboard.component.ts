import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cartItems: any[] = [1, 2, 3, 4, 5];
  quantity: number = 0;
  show_mobile: boolean = false;
  toggleClass: boolean = false;
  shoeImages: any[] = [
    {
      main: './assets/images/image-product-1.jpg',
      thumb: './assets/images/image-product-1-thumbnail.jpg',
    },
    {
      main: './assets/images/image-product-2.jpg',
      thumb: './assets/images/image-product-2-thumbnail.jpg',
    },
    {
      main: './assets/images/image-product-3.jpg',
      thumb: './assets/images/image-product-3-thumbnail.jpg',
    },
    {
      main: './assets/images/image-product-4.jpg',
      thumb: './assets/images/image-product-4-thumbnail.jpg',
    },
  ];
  counter: number = 0;
  currItem: object = this.shoeImages[this.counter];

  constructor() {}

  ngOnInit(): void {}

  toggleMobile() {
    this.show_mobile = !this.show_mobile;
  }

  changeCounter(dir: string) {
    if (this.counter < 4 && dir == 'up') {
      this.counter++;
    } else if (this.counter > 0 && dir == 'down') {
      this.counter--;
    }
    this.currItem = this.shoeImages[this.counter];
    this.toggleImageAnimation();
  }

  changeCurr(num: number) {
    this.counter = num;
    this.currItem = this.shoeImages[this.counter];
    this.toggleImageAnimation();
  }

  toggleImageAnimation() {
    this.toggleClass = !this.toggleClass;
    setTimeout(() => (this.toggleClass = !this.toggleClass), 150);
  }

  clearCart() {
    this.quantity = 0;
  }

  addToCart(quantity: number) {
    console.log('addToCart fired from Dashboard');
    this.quantity = quantity;
  }
}
