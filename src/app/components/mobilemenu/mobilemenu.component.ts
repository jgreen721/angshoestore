import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss'],
})
export class MobilemenuComponent implements OnInit {
  @Input() show_mobile: boolean = false;
  @Output() toggleMobile = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggle_mobile() {
    console.log('toggleMObile fired!');
    this.toggleMobile.emit();
  }
}
