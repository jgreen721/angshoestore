import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {
  show_cart: boolean = false;
  @Input() quantity: number = 0;
  @Output() toggleMobile = new EventEmitter();
  @Output() clearCart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleCart() {
    this.show_cart = !this.show_cart;
  }

  toggle_mobile() {
    console.log('toggle from topmenu');
    this.toggleMobile.emit();
  }

  handleClearCart() {
    setTimeout(() => (this.show_cart = !this.show_cart), 500);
    this.clearCart.emit();
  }
}
