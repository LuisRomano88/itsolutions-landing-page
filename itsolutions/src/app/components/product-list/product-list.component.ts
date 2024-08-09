import { Component, OnInit, Input } from '@angular/core';
import { ServiceProductsService } from '../../services/service-products.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { eventListeners } from '@popperjs/core';
import { FavoritesService } from 'src/app/services/favorites.service';

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
  favorites: Product[] = [];

  constructor(
    private ServiceProductsService: ServiceProductsService,
    private route: ActivatedRoute, private favoriteService: FavoritesService
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

 toggleFilter() {
    this.showFilter = !this.showFilter; // Alternar la visibilidad del filtro
  }
  
  /*addFavorite(product: Product) {
    this.favoriteService.addFavorite(product);
  }*/

    addOrRemoveFavorite(product: Product) {
      if (this.favoriteService.isFavorite(product)) {
        this.favoriteService.removeFavorite(product);
      } else {
        this.favoriteService.addFavorite(product);
      }
    }
  
    isFavorite(product: Product): boolean {
      return this.favoriteService.isFavorite(product);
    }


}
