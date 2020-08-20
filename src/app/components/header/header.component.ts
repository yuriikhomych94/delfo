import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  getProducts: Array<any> = [];
  sum: number = 0;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this._productLength();
    this._getBasketFromLocal();
  }


  private _productLength(): void {
    this.ordersService.basket.subscribe(() => {
      this._getBasketFromLocal();
    });
  }

  private _getBasketFromLocal(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.getProducts = JSON.parse(localStorage.getItem('basket'));
      this.sum = this.getProducts.reduce((accum, product) => accum + (product.price * product.count), 0);
    }
  }


}
