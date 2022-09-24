import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallerycard',
  templateUrl: './gallerycard.component.html',
  styleUrls: ['./gallerycard.component.scss'],
})
export class GallerycardComponent implements OnInit {
  @Input() currItem: any = {};
  @Input() toggleClass: boolean = false;
  @Output() changeCounter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeImage(dir: string) {
    this.changeCounter.emit(dir);
  }
}
