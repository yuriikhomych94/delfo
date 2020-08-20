import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  view: IProduct = null;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private orderService: OrdersService) { }

  ngOnInit() {
    this.getMyProduct();
  }

  productCount(product: IProduct, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
  }

  getMyProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCurrentProduct(id).subscribe(
      data => {
        this.view = data;
      }
    );
  }

  addBasket(product: IProduct): void {
    let localProducts: Array<IProduct> = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      localProducts = JSON.parse(localStorage.getItem('basket'));
      if (localProducts.some(prod => prod.id === product.id)) {
        const index = localProducts.findIndex(prod => prod.id === product.id);
        localProducts[index].count += product.count;
      } else {
        localProducts.push(product);
      }
      localStorage.setItem('basket', JSON.stringify(localProducts));
    } else {
      localProducts.push(product);
      localStorage.setItem('basket', JSON.stringify(localProducts));
    }
    product.count = 1;
    this.orderService.basket.next(localProducts);
  }
}
