import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ]),
      transition('visible => hidden', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class MyCartComponent implements OnInit {

  isVisible = false;
  cart: Product[] = [];
  quantity: number = 1;
  total = this.cartService.totalCart();
  myCart$ = this.cartService.myCart$;

  
  
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.getCart().subscribe((cart: Product[]) => {
      this.cart = cart;
    });
    this.cartService.visibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  removeCart(product: Product): void {
    this.cartService.removeToCart(product);
  }

  toggleCart() {
    this.isVisible = !this.isVisible;
  }

  addQuantity(product: Product){
    this.cartService.addQuantity(product);
  }

  decreaseQuantity(product: Product){
    this.cartService.decreaseQuantity(product)
  }

  totalProduct(price: number, quantity:number){
    return price * quantity;
  }

  totalCart(){
    return this.cartService.totalCart();
  }

  finalizePurchase() {

    this.router.navigate(['/pedido']);
  }

  



}
