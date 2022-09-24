import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss'],
})
export class InfocardComponent implements OnInit {
  quantity: number = 0;
  @Output() handleCart = new EventEmitter();
  @Output() addToCart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeQuantity(dir: string) {
    this.handleCart.emit(dir);
  }

  handleAddToCart() {
    console.log('handleAddToCart fired!');
    this.addToCart.emit(this.quantity);
    this.quantity = 0;
  }

  handleQuantity(dir: string) {
    console.log(dir);
    if (dir == 'up') {
      this.quantity++;
    } else if (this.quantity > 0 && dir == 'down') {
      this.quantity--;
    }
  }
}
