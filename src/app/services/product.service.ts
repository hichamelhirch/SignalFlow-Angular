import {effect, Injectable, OnInit, signal} from '@angular/core';
import {Product} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    productsState=signal<Product[]>([]);
  constructor() {
    effect(()=>{
      this.productsState.set([
        { id: 1, name: "Laptop", price: 1200, selected: true },
        { id: 2, name: "Smartphone", price: 800, selected: false },
        { id: 3, name: "Headphones", price: 150, selected: false },
        { id: 4, name: "Tablet", price: 500, selected: true },
        { id: 5, name: "Smartwatch", price: 200, selected: true }
      ]);
    },{allowSignalWrites:true})
  }
  getAllProducts(){
    return this.productsState();
  }
  public selectProduct(product: Product) {
    this.productsState.update((prods) =>
      prods.map((p) =>
        p.id === product.id ? { ...p, selected: !p.selected } : p
      )
    );
  }

  deleteProduct(product: Product) {
    this.productsState.update(state=>state.filter(p=>p.id!==product.id));
  }

  saveProduct(product: Product) {
   product.id=new Date().getTime();
    this.productsState.update(state=>[...state,product]);
  }
}

