import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';
import { GallerycardComponent } from './components/gallerycard/gallerycard.component';
import { GalleryrowComponent } from './components/galleryrow/galleryrow.component';
import { InfocardComponent } from './components/infocard/infocard.component';
import { MobilemenuComponent } from './components/mobilemenu/mobilemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    DashboardComponent,
    LandingComponent,
    NotfoundComponent,
    CartComponent,
    GallerycardComponent,
    GalleryrowComponent,
    InfocardComponent,
    MobilemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
