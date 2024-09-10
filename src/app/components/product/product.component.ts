import { Component,signal,computed,effect } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
   price:number=600;
   quantity=signal(1);
   total=computed(()=>this.price*this.quantity());
   counter=signal(0)
  constructor() {
    effect(()=>{
      console.log("Quantity=> "+this.quantity());
      console.log("total => "+this.total());
      this.counter.set(5);
    },{allowSignalWrites:true})
  }
  increment() {
  //this.quantity.set(this.quantity()+1);
    this.quantity.update(value=>value+1);
  }

  decrement() {
   // this.quantity.set(this.quantity()-1);
    this.quantity.update(value=>value+1);
  }
}
