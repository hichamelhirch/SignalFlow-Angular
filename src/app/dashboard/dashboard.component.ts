import {Component, computed} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

constructor(private productService:ProductService) {
}
  selectedProductsCount=computed<number>(()=>this.productService.getAllProducts().filter(p=>p.selected).length);
  totalPriceSelectedProducts=computed<number>(()=>this.productService.getAllProducts().filter(p=>p.selected==true).reduce((sum,current)=>sum+current.price,0));
}
