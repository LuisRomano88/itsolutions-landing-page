import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CaruselComponent } from './carusel/carusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  //{path:'promociones', component: CaruselComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'productos', component: ProductosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'', component: FooterComponent},
  {path:'', component: WhatsappComponent},
  {path:'tienda',component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
