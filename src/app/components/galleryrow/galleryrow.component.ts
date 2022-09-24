import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-galleryrow',
  templateUrl: './galleryrow.component.html',
  styleUrls: ['./galleryrow.component.scss'],
})
export class GalleryrowComponent implements OnInit {
  @Input() shoeImages: any[] = [];
  @Output() changeCurr = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeCounter(counter: number) {
    this.changeCurr.emit(counter);
  }
}
