import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-pizza-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class PizzaGetComponent implements OnInit {
  pizzas:Pizza[];
  selectedPizza:Pizza;
  constructor(private route:ActivatedRoute,
    private service:PizzaService) { }

  ngOnInit() {
    this.service.getPizzas()
    .subscribe(pizzaList=>this.pizzas=pizzaList);
  }

  onSelection(pizza:Pizza){
    this.selectedPizza=pizza;
  }
}
