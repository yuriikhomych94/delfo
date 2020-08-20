import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit {

  orders: Array<IProduct> = [];
  productName: string;
  image: string;
  userName: string;
  userPhone: string;
  userCity: string;
  userStreet: string;
  userHouse: number;
  userComment: string;
  totalPayment: string;
  totalPrice: number;

  lat: number = 49.849526;
  lng: number = 23.968532;
  zoom: number = 11.8;

  greenPolygonColor: string = "green";
  greenStrokeColor: string = "green";

  yellowPolygonColor: string = "yellow";
  yellowStrokeColor: string = "yellow";
  fillOpacity: number = .1;

  pathsGreen: google.maps.LatLngLiteral[] = [
    { lat: 49.832141, lng: 23.978452 },
    { lat: 49.825718, lng: 23.978109 },
    { lat: 49.822174, lng: 23.977079 },
    { lat: 49.817347, lng: 23.972548 },
    { lat: 49.812947, lng: 23.973698 },
    { lat: 49.809547, lng: 23.976564 },
    { lat: 49.805338, lng: 23.979310 },
    { lat: 49.803122, lng: 23.986177 },
    { lat: 49.800684, lng: 23.996133 },
    { lat: 49.801070, lng: 24.001798 },
    { lat: 49.801070, lng: 24.004263 },
    { lat: 49.800009, lng: 24.007713 },
    { lat: 49.799107, lng: 24.010507 },
    { lat: 49.798100, lng: 24.013136 },
    { lat: 49.797888, lng: 24.017819 },
    { lat: 49.797888, lng: 24.019709 },
    { lat: 49.797781, lng: 24.024228 },
    { lat: 49.797304, lng: 24.028665 },
    { lat: 49.797835, lng: 24.033430 },
    { lat: 49.796986, lng: 24.040086 },
    { lat: 49.798497, lng: 24.045233 },
    { lat: 49.800104, lng: 24.050726 },
    { lat: 49.801315, lng: 24.052569 },
    { lat: 49.802201, lng: 24.058920 },
    { lat: 49.802976, lng: 24.059865 },
    { lat: 49.803641, lng: 24.061839 },
    { lat: 49.805137, lng: 24.064499 },
    { lat: 49.805746, lng: 24.065873 },
    { lat: 49.807907, lng: 24.066388 },
    { lat: 49.809125, lng: 24.068362 },
    { lat: 49.810011, lng: 24.069993 },
    { lat: 49.811064, lng: 24.071366 },
    { lat: 49.812781, lng: 24.071108 },
    { lat: 49.814498, lng: 24.070078 },
    { lat: 49.815249, lng: 24.071456 },
    { lat: 49.816479, lng: 24.070741 },
    { lat: 49.818067, lng: 24.068280 },
    { lat: 49.819860, lng: 24.066850 },
    { lat: 49.820372, lng: 24.064547 },
    { lat: 49.820987, lng: 24.062245 },
    { lat: 49.822319, lng: 24.061053 },
    { lat: 49.822455, lng: 24.059923 },
    { lat: 49.822524, lng: 24.058043 },
    { lat: 49.821901, lng: 24.056754 },
    { lat: 49.823102, lng: 24.055255 },
    { lat: 49.824264, lng: 24.054397 },
    { lat: 49.825123, lng: 24.054096 },
    { lat: 49.826185, lng: 24.055331 },
    { lat: 49.827767, lng: 24.055967 },
    { lat: 49.829659, lng: 24.051088 },
    { lat: 49.831624, lng: 24.050612 },
    { lat: 49.834572, lng: 24.050612 },
    { lat: 49.837458, lng: 24.054421 },
    { lat: 49.840529, lng: 24.054611 },
    { lat: 49.842862, lng: 24.054040 },
    { lat: 49.843599, lng: 24.049755 },
    { lat: 49.846209, lng: 24.049993 },
    { lat: 49.847206, lng: 24.050251 },
    { lat: 49.850780, lng: 24.049864 },
    { lat: 49.850780, lng: 24.047286 },
    { lat: 49.852109, lng: 24.043033 },
    { lat: 49.851777, lng: 24.039038 },
    { lat: 49.850697, lng: 24.031562 },
    { lat: 49.854353, lng: 24.027438 },
    { lat: 49.855183, lng: 24.024126 },
    { lat: 49.857706, lng: 24.025237 },
    { lat: 49.858812, lng: 24.022233 },
    { lat: 49.859034, lng: 24.017941 },
    { lat: 49.857706, lng: 24.014937 },
    { lat: 49.855935, lng: 24.012019 },
    { lat: 49.853887, lng: 24.010560 },
    { lat: 49.852006, lng: 24.003693 },
    { lat: 49.848187, lng: 24.000947 },
    { lat: 49.847302, lng: 23.995711 },
    { lat: 49.842652, lng: 23.995711 },
    { lat: 49.834681, lng: 23.989016 },
    { lat: 49.832141, lng: 23.978452 }
  ];

  pathsYellow: google.maps.LatLngLiteral[] = [
    { lat: 49.883215, lng: 24.010923 },
    { lat: 49.876294, lng: 23.998204 },
    { lat: 49.873417, lng: 23.982412 },
    { lat: 49.866115, lng: 23.973142 },
    { lat: 49.863681, lng: 23.954946 },
    { lat: 49.861910, lng: 23.937780 },
    { lat: 49.850400, lng: 23.923360 },
    { lat: 49.846637, lng: 23.905164 },
    { lat: 49.839109, lng: 23.881475 },
    { lat: 49.827594, lng: 23.878042 },
    { lat: 49.817627, lng: 23.887311 },
    { lat: 49.809208, lng: 23.914777 },
    { lat: 49.797686, lng: 23.926450 },
    { lat: 49.788155, lng: 23.941900 },
    { lat: 49.780619, lng: 23.970052 },
    { lat: 49.777293, lng: 23.991338 },
    { lat: 49.777293, lng: 24.023610 },
    { lat: 49.778402, lng: 24.043866 },
    { lat: 49.781727, lng: 24.068242 },
    { lat: 49.787047, lng: 24.086095 },
    { lat: 49.793794, lng: 24.093246 },
    { lat: 49.798943, lng: 24.086095 },
    { lat: 49.805334, lng: 24.080319 },
    { lat: 49.810481, lng: 24.080594 },
    { lat: 49.816515, lng: 24.085270 },
    { lat: 49.822904, lng: 24.075919 },
    { lat: 49.825743, lng: 24.069868 },
    { lat: 49.830356, lng: 24.067667 },
    { lat: 49.834968, lng: 24.067943 },
    { lat: 49.837452, lng: 24.062167 },
    { lat: 49.842862, lng: 24.054040 },
    { lat: 49.843599, lng: 24.049755 },
    { lat: 49.846209, lng: 24.049993 },
    { lat: 49.847206, lng: 24.050251 },
    { lat: 49.850780, lng: 24.049864 },
    { lat: 49.860226, lng: 24.050886 },
    { lat: 49.874240, lng: 24.050542 },
    { lat: 49.880650, lng: 24.041211 },
    { lat: 49.883215, lng: 24.010923 }
  ]

  constructor(private _orderService: OrdersService) { }

  ngOnInit(): void {
    this._getBasket();
  }

  private _getBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.orders = JSON.parse(localStorage.getItem('basket'));
    }
    this.total();
  }


  productCount(product: IProduct, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
    this.total();
    this.updateLocalProducts();
    this._orderService.basket.next(this.orders);
  }


  deleteProduct(product: IProduct) {
    const index = this.orders.findIndex(prod => prod.id === product.id);
    this.orders.splice(index, 1);
    this.total();
    this.updateLocalProducts();
    this._orderService.basket.next(this.orders);
  }


  addOrder(): void {
    const newOrder: IOrder = new Order(1,
      //  this.productName,
      this.orders,
      this.image,
      this.userName,
      this.userPhone,
      this.userCity,
      this.userStreet,
      this.userHouse,
      this.totalPrice,
      this.userComment);
    if (this.orders.length > 0) {
      newOrder.id = +this.orders.slice(-1)[0].id + 1;
    };
    this._orderService.addOrder(newOrder).subscribe(() => {
      this._getBasket();
    });
    localStorage.setItem('basket', JSON.stringify(this.orders));
    this._orderService.basket.next(this.orders);
    console.log("Add new order from bascket");
    console.log(newOrder)
    this._orderService.addOrder(newOrder).subscribe(() => {
      this._getBasket();
    });
    this.resetForm();
    this.orders = [];
  }

  resetForm(): void {
    this.userName = '';
    this.userPhone = null;
    this.userCity = '';
    this.userStreet = '';
    this.userHouse = null;
    this.userComment = ''
  }


  private total() {
    this.totalPrice = this.orders.reduce((total, elem) => {
      return total + (elem.price * elem.count);
    }, 0);
  }


  private updateLocalProducts(): void {
    localStorage.setItem('basket', JSON.stringify(this.orders));
  }
}