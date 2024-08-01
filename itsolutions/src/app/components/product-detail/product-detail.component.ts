import { Component, OnInit, Input } from '@angular/core';
import { ServiceProductsService } from '../../services/service-products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductListComponent } from '../product-list/product-list.component';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  //product: any = [];
  //products: Product[] = [];
  product: Product | undefined;
  
 

  constructor(private ServiceProductsService: ServiceProductsService, 
    private route: ActivatedRoute){}



  ngOnInit(): void {
    //this.product = this.ServiceProductsService.generateSingleProduct();
        // First get the product id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        //const productId = Number(routeParams.get('productId'));
        //console.log("route params",routeParams)
        //console.log("product id",productId)



        //const productId = "2"; // Ejemplo de ID de producto a buscar
        //this.product = this.ServiceProductsService.getProductById(productId);
        
        this.route.paramMap.subscribe(params => {
          const productId = params.get('id');
          if (productId) {
            this.ServiceProductsService.getProductById(+productId).subscribe((product) => {
              this.product = product;
            });
          }
        });
      }


      
  }
 


 


