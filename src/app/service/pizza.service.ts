import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Pizza } from '../pizza/pizza';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  
  uri="http://localhost:4000/pizza";
  constructor(private httpClient:HttpClient) {}
  getPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/allPizza');
  };
addPizza(id,name,price){
  let pizza={
    pizzaId:id,
    pizzaName:name,
    price:price
  };
return this.httpClient.post(`${this.uri}`+'/addPizza',pizza).subscribe(res=>console.log("New Pizza registered successfully"));
}

 deletePizza(pizzaId:number):any{
   this.httpClient.delete(`${this.uri}`+'/delete/'+`${pizzaId}`)
      .subscribe(res => console.log('Done'));
 }
}

// updatePizza(pizzaId,price):any{
//   return this.httpClient.put(`${this.uri}`+'/update/'+pizzaId+'/'+price,{})
//   .subscribe(res=>console.log(pizzaId+"New Pizza regitered successfully"));
// }

// }

