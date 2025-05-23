import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CaruselComponent } from './carusel/carusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { LoginComponent } from './components/login/login.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { OrderComponent } from './components/order/order.component';
import { AuthGuard } from './guards/auth.guard' ;
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path:'promociones', component: CaruselComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'', component: FooterComponent},
  {path:'', component: WhatsappComponent},
  {path:'tienda',component: ProductListComponent},
  {path: 'favoritos', component: FavoriteListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'login',component: LoginComponent},
  {path: 'carrito', component: MyCartComponent, canActivate: [AuthGuard]},
  {path: 'pedido', component: OrderComponent, canActivate: [AuthGuard]} ,
  {path: 'usuarios',  component: UserComponent,canActivate: [AuthGuard]},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]}
  //  {path: '**', redirectTo: '/login' },// Ruta por defecto
  //  {path: 'register', component: RegisterComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
