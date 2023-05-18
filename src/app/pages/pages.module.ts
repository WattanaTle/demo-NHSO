import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    AppModule,
    PagesRoutingModule
  ],
  exports: [
    AppModule
  ],
  providers: [],
})
export class PagesModule { }
