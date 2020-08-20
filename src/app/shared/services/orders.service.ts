import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  basket: Subject<any> = new Subject<any>();

  private _url: string;

  constructor(private _http: HttpClient) {
    this._url = 'http://localhost:3000/orders';
  }

  getOrder(): Observable<Array<IOrder>> {
    return this._http.get<Array<IOrder>>(this._url);
  }

  addOrder(order: IOrder): Observable<Array<IOrder>> {
    console.log("Add order from service");
    console.log(order);
    return this._http.post<Array<IOrder>>(this._url, order);
  }

}
