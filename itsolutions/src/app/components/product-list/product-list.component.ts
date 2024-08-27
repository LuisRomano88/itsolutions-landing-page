import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceProductsService } from '../../services/service-products.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { eventListeners } from '@popperjs/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { CartService } from 'src/app/services/cart.service';

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
  cart: Product[] = [];
  
  @Output() toggleDiv = new EventEmitter<void>();

  constructor(
    private ServiceProductsService: ServiceProductsService,
    private route: ActivatedRoute,
    private favoriteService: FavoritesService,
    private cartService: CartService
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

    addOrRemoveCart(cart: Product) {
      if (this.cartService.isSelected(cart)) {
        this.cartService.removeToCart(cart);
      } else {
        this.cartService.addToCart(cart);
      }
    }
  
    isFavorite(product: Product): boolean {
      return this.favoriteService.isFavorite(product);
    }

    isSelected(product: Product): boolean{
      return this.cartService.isSelected(product);
    }

    toggleCart() {
      this.cartService.toggleVisibility();
    }

}
