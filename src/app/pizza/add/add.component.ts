import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class PizzaAddComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb:FormBuilder, private pizzaService:PizzaService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      pizzaId:['',Validators.required],
      pizzaName:['',Validators.required],
      price:['',Validators.required]
    });
  }

  addPizza(pizzaId,pizzaName,price){
    this.pizzaService.addPizza(pizzaId,pizzaName,price);
  }

}
