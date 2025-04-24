import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CaruselComponent } from './carusel/carusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ServiceProductsService } from './services/service-products.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component'
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModalEditUserComponent } from './components/modal-edit-user/modalEditUser.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CaruselComponent,
    ServiciosComponent,
    ContactoComponent,
    FooterComponent,
    WhatsappComponent,
    ProductListComponent,
    HomeComponent,
    ProductDetailComponent,
    FavoriteListComponent,
    LoginComponent,
    MyCartComponent,
    OrderComponent,
    RegisterComponent,
    UserComponent,
    DashboardComponent,
    ModalEditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [ServiceProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
