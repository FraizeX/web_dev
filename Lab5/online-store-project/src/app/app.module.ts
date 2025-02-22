import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './productitem/productitem.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  providers: [],

})
export class AppModule {}
