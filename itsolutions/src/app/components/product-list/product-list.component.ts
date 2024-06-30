import { Component, OnInit } from '@angular/core';
import { ServiceProductsService } from '../../services/service-products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  router: any;

  constructor(private ServiceProductsService: ServiceProductsService){}
  ngOnInit():void {

    this.products = this.ServiceProductsService.generateProducts(10); // Generar 10 productos
  }

  toggleNav(product: any) {
    product.navActive = !product.navActive;
  }



}
