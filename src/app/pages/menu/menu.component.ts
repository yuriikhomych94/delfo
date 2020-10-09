import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  category: string;
  arrProducts: Array<IProduct> = [];
  localProducts: Array<IProduct> = [];

  constructor(
    private _productService: ProductsService,
    private _ordersService: OrdersService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const categoryName = this._activateRoute.snapshot.paramMap.get('category');
        this._getProducts(categoryName);
      }
    });
  }

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts(categoryName?: string): void {
    categoryName = categoryName || this._activateRoute.snapshot.paramMap.get('category');
    this._productService.getProduct().subscribe(data => {
      console.log(data);

      console.log(categoryName);
      this.arrProducts = data.filter(product => product.category?.nameEN === categoryName);
      this.category = this.arrProducts[0].category.nameEN;
    });
  }

  addToBasket(product: IProduct): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.localProducts = JSON.parse(localStorage.getItem('basket'));
      if (this.localProducts.some(prod => prod.id === product.id)) {
        const index = this.localProducts.findIndex(prod => prod.id === product.id);
        this.localProducts[index].count += product.count;
      } else {
        this.localProducts.push(product);
      }
      localStorage.setItem('basket', JSON.stringify(this.localProducts));
    } else {
      this.localProducts.push(product);
      localStorage.setItem('basket', JSON.stringify(this.localProducts));
    }
    product.count = 1;
    this._ordersService.basket.next(product);
  }


  productCount(product: IProduct, status: boolean): void {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
  }

}
