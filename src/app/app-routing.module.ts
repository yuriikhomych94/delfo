import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { PasteComponent } from './pages/paste/paste.component';
import { SaladComponent } from './pages/salad/salad.component';
import { RavioliComponent } from './pages/ravioli/ravioli.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { SaucesComponent } from './pages/sauces/sauces.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SalesDetailsComponent } from './pages/sales-details/sales-details.component';
import { MenuComponent } from './pages/menu/menu.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminSalesComponent } from './admin/admin-sales/admin-sales.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', component: HomeComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'sale/:id', component: SalesDetailsComponent },
  { path: 'menu/:category', component: MenuComponent },
  { path: 'menu/:category/:id', component: ProductDetailsComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'paste', component: PasteComponent },
  { path: 'salad', component: SaladComponent },
  { path: 'ravioli', component: RavioliComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'sauces', component: SaucesComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'category' },
      { path: 'category', component: AdminCategoryComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'sales', component: AdminSalesComponent },
      { path: 'orders', component: AdminOrdersComponent }
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
