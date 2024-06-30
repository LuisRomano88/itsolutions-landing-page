import { Injectable } from '@angular/core';
import { Faker, fa, faker } from '@faker-js/faker';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  navActive: boolean;
}

@Injectable({
  providedIn: 'root'
})



export class ServiceProductsService {

constructor() { }



generateProducts(count: number): Product[] {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      category: faker.commerce.department(), navActive: false ,
      imageUrl: faker.image.imageUrl()
    });
    
  }
  return products;

}

}





