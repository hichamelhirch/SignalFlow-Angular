import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Corrigez "styleUrl" à "styleUrls"
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec des validateurs pour éviter des erreurs nulles
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      selected: [false]
    });
  }

  saveProduct() {
    if (this.productForm.valid) {
      const product: Product = {
        id: 0,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        selected: this.productForm.value.selected
      };
      this.productService.saveProduct(product);
      this.productForm.reset(); // Réinitialisez le formulaire après l'enregistrement
    } else {
      console.log('Formulaire invalide');
    }
  }
}
