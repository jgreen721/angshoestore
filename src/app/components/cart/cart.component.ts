import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() show_cart: boolean = false;
  @Input() quantity: number = 0;
  @Output() clearCart = new EventEmitter();
  total: number = this.quantity * 125;
  constructor() {}

  ngOnInit(): void {}

  handleClearCart() {
    this.clearCart.emit();
  }
}
