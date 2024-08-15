import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductListComponent } from '../product-list/product-list.component';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  favorites: Product[] = [];
  product: any;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe((favorites: Product[]) => {
      this.favorites = favorites;
    });
  }

  removeFavorite(product: Product): void {
    this.favoritesService.removeFavorite(product);
  }
  
}
