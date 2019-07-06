import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/service/pizza.service';


@Component({
  selector: 'app-pizza-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
  export class PizzaDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private pizzaService:PizzaService) { }

  ngOnInit() {
    let pizzaId=+this.route.snapshot.paramMap.get("pizzaId");
   this.deletePizza(pizzaId);
  }
  deletePizza(pizzaId){
      this.pizzaService.deletePizza(pizzaId);
  }

}