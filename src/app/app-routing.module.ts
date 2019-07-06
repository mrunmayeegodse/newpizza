import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaGetComponent} from './pizza/get/get.component';
import {PizzaAddComponent } from './pizza/add/add.component';
import {PizzaDeleteComponent} from './pizza/delete/delete.component'

const routes: Routes = [
  {path:'pizza/allpizza',component:PizzaGetComponent},
  {path:'pizza/create',component:PizzaAddComponent},
  {path:'pizza/delete/:pizzaId',component:PizzaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
