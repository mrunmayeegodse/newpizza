import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { PizzaAddComponent } from './pizza/add/add.component';
 import { PizzaDeleteComponent } from './pizza/delete/delete.component';
import { PizzaGetComponent } from './pizza/get/get.component';
// import { EditComponent } from './pizza/edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PizzaAddComponent,
    PizzaDeleteComponent,
    PizzaGetComponent,
    // EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
