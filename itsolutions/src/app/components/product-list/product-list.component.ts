import { Component, OnInit, Input } from '@angular/core';
import { ServiceProductsService } from '../../services/service-products.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { eventListeners } from '@popperjs/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  filteredProducts: Product[] = [];
  //navActive = false;  
  showFilter: boolean = false; // Propiedad para controlar la visibilidad del filtro



  constructor(
    private ServiceProductsService: ServiceProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ServiceProductsService.getAllProduct().subscribe((data: Product[]) => {
      this.products = data;
      this.filteredProducts = data;
      this.categories = [...new Set(data.map((product) => product.category))];
    });
  }

  toggleNav(product: any) {
    product.navActive = !product.navActive;
  }
  

  filterCategory(category: string) {
    this.filteredProducts = this.products.filter(
      (product) => product.category === category
    );
  }

  showAllProducts() {
    this.filteredProducts = this.products;
  }

  /*close() {
    this.showFilter = false; // Cerrar el filtro
  }

  open() {
    this.showFilter = true; // abrir el filtro
  }*/

  toggleFilter() {
    this.showFilter = !this.showFilter; // Alternar la visibilidad del filtro
  }
  
  

  /*extractCategories(): void {
    const categorySet = new Set<string>();
    this.products.forEach(product => {
      if (product.category) {
        categorySet.add(product.category);

      }
    });
    this.categories = Array.from(categorySet);
  }*/

    
}
