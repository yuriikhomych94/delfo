import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
 
export class AdminOrdersComponent implements OnInit {

  orders: Array<IOrder> = [];

  constructor(private _orderService: OrdersService) { }

  ngOnInit(): void {
    this._order();
  }

  private _order(): void {
    this._orderService.getOrder().subscribe( data => {
      this.orders = data;
      console.log(this.orders);
    })
  }


}
