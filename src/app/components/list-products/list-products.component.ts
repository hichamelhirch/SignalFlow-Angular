import { Component } from '@angular/core';


interface Product {
  id: number;
  name: string;
  price: number;
}


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  products:Product[]=[
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Tablet", price: 500 },
    { id: 5, name: "Smartwatch", price: 200 }
  ];


}
