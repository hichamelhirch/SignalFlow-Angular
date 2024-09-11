import {Component, computed} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/model";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
   products=computed(()=>this.productService.getAllProducts());
  constructor(private productService:ProductService) {
  }


  selected(product: Product) {
   this.productService.selectProduct(product);
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }
}
