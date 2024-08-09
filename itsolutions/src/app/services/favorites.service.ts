import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  //private favorites: Product[] = [];

  private favorites = new BehaviorSubject<Product[]>([]);
  currentFavorites = this.favorites.asObservable();

  constructor() { }

  addFavorite(product: Product) {
    const currentFavorites = this.favorites.value;
    if (!currentFavorites.some(fav => fav.id === product.id)) {
      this.favorites.next([...currentFavorites, product]);
    }
  }

  removeFavorite(product: Product) {
    const currentFavorites = this.favorites.value;
    this.favorites.next(currentFavorites.filter(fav => fav.id !== product.id));
  }

  isFavorite(product: Product): boolean {
    return this.favorites.value.some(fav => fav.id === product.id);
  }

  getFavorites() {
    return this.favorites.asObservable();
  }

}
