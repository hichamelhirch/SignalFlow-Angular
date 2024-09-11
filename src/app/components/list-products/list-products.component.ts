import {Component, computed, OnInit, signal} from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  // Signal pour stocker les produits
  products = signal<Product[]>([]);

  // Computed properties pour calculer le nombre de produits sélectionnés et le total
  selectedProducts = computed<number>(() => this.products().filter(p => p.selected).length);
  total = computed<number>(() => this.products()
    .filter(p => p.selected)
    .reduce((sum, current) => sum + current.price, 0)
  );

  // Méthode pour changer l'état "selected" d'un produit
  selected(product: Product) {
    // Crée une nouvelle liste avec la modification de l'état "selected"
    const updatedProducts = this.products().map(p =>
      p.id === product.id ? { ...p, selected: !p.selected } : p
    );
    // Met à jour le signal "products"
    this.products.set(updatedProducts);
  }


  ngOnInit(): void {
    this.products.set([
      { id: 1, name: "Laptop", price: 1200, selected: true },
      { id: 2, name: "Smartphone", price: 800, selected: false },
      { id: 3, name: "Headphones", price: 150, selected: false },
      { id: 4, name: "Tablet", price: 500, selected: true },
      { id: 5, name: "Smartwatch", price: 200, selected: true }
    ]);
  }
}
