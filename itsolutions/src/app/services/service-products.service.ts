import { Injectable } from '@angular/core';
import { Faker, fa, faker } from '@faker-js/faker';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})



export class ServiceProductsService {

  private products: Product[] = [];
  urlEndPoint = 'https://fakestoreapi.com/products';


constructor(private http: HttpClient) {
  //this.products = this.generateProducts(); // Genera una lista inicial de productos
}

getAllProduct(): Observable<Product[]>{
  return this.http.get<Product[]>(this.urlEndPoint)
}



/*generateProducts(count: number): Product[] {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    this.products.push(this.generateSingleProduct());
  }
  return this.products;
  
}

generateSingleProduct(): Product {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: faker.image.url(),
    category: faker.commerce.department(),
    marca: faker.company.name().toUpperCase(),
    navActive: false
  };
}
*/


getProductById(id: number): Observable<Product> {
  const url = `${this.urlEndPoint}/${id}`;
  return this.http.get<Product>(url);
}

getProductsByCategory(category: string): Observable<Product[]> {
  const url = `${this.urlEndPoint}?category=${category}`;
  return this.http.get<Product[]>(url);
}


}