import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CaruselComponent } from './carusel/carusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: '', component: NavBarComponent},
  {path:'', component: CaruselComponent},
  {path:'', component: ServiciosComponent},
  {path:'', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
