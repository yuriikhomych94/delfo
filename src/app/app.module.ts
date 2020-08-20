import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { PasteComponent } from './pages/paste/paste.component';
import { SaladComponent } from './pages/salad/salad.component';
import { RavioliComponent } from './pages/ravioli/ravioli.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { SaucesComponent } from './pages/sauces/sauces.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BasketComponent } from './pages/basket/basket.component';
import { MenuComponent } from './pages/menu/menu.component';

import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SalesDetailsComponent } from './pages/sales-details/sales-details.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminSalesComponent } from './admin/admin-sales/admin-sales.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

import { AgmCoreModule } from '@agm/core';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ngxUILoader } from './preloader-config'; 

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import 'firebase/storage';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SalesComponent,
    PizzaComponent,
    PasteComponent,
    SaladComponent,
    RavioliComponent,
    DessertComponent,
    SaucesComponent,
    BasketComponent,
    PaymentComponent,
    
    ProductDetailsComponent,
    SalesDetailsComponent,

    AdminComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminSalesComponent,
    AdminOrdersComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMP4Yi0ofSkp9f4j7SrxBa66jRPCFR3jI'
    }),
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxUiLoaderModule.forRoot(ngxUILoader),
    NgxUiLoaderRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
