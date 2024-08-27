import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


private myCart = new BehaviorSubject<Product[]>([]);
myCart$ = this.myCart.asObservable();


private visibilitySubject = new BehaviorSubject<boolean>(false);
visibility$ = this.visibilitySubject.asObservable();

//lista carrito
private myList:Product[]=[];



constructor() { }


  /* SOME es un método nativo de los arrays en JavaScript que se utiliza para comprobar si al menos un elemento en un array cumple con una condición específica.
  NEXT es un método que pertenece a los observables de RxJS, el cual es usado para emitir valores a todos los suscriptores del observable.*/
  addToCart(product: Product) {
  const currentProduct = this.myCart.value;
    if (!currentProduct.some(p => p.id === product.id)) {
      product.quantity = 1;
      this.myCart.next([...currentProduct, product]); 

    }
  }

  removeToCart(product: Product) {
    const currentProduct = this.myCart.value;
    this.myCart.next(currentProduct.filter(prod => prod.id !== product.id));
  }

  isSelected(product: Product): boolean {
    return this.myCart.value.some(prod => prod.id === product.id);
  }

  getCart() {
    return this.myCart.asObservable();
  }

  toggleVisibility() {
    this.visibilitySubject.next(!this.visibilitySubject.value);
  }

  addQuantity(product: Product){
    product.quantity++;
  }

  decreaseQuantity(product: Product){
    if (product.quantity > 1) {
     product.quantity--;
    }
  }


  totalCart() {
    return this.myCart.value.reduce((acumulador, product) => {
      const totalAcumulador = acumulador;
      return acumulador + product.quantity * product.price;
      
    }, 0);
  }



}
