import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzaProducts: Array<IProduct> = [];
  localProducts: Array<IProduct> = [];

  constructor(private _ordersService: OrdersService,
    private _productService: ProductsService) { }

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts(): void {
    this._productService.getProduct().subscribe(data => {
      this.pizzaProducts = data.filter(product => product.category.nameEN === 'pizza');
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














