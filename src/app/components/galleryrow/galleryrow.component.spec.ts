import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryrowComponent } from './galleryrow.component';

describe('GalleryrowComponent', () => {
  let component: GalleryrowComponent;
  let fixture: ComponentFixture<GalleryrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
