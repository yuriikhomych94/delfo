import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url: string;

  constructor(private firestore: AngularFirestore) { }

  getProduct(): Observable<Array<IProduct>> {
    return this.firestore.collection<IProduct>('products').valueChanges();
  }

  getCurrentProduct(id: number): Observable<IProduct> {
    return this.firestore
      .collection<IProduct>('products', (ref) => ref.where('id', '==', id))
      .get().source;
  }

  addProduct(product: IProduct): void {
    // var image: String = ""
    // if (product != undefined) {
    //   image = product.image;
    // }
    const _products = {
      id: product.id,
      category: product.category,
      nameUA: product.nameUA,
      nameEN: product.nameEN,
      description: product.description,
      price: product.price,
      weight: product.weight,
      count: product.count,
      image: product.image,
      size: product.size,
    };

console.log('Add product');
console.log(_products);

    this.firestore
      .collection<IProduct>('products')
      .doc(product.id.toString())
      .set(_products);
  }

  deleteProduct(product: IProduct): void {
    this.firestore
      .collection<IProduct>('products')
      .doc(product.id.toString())
      .delete();
  }

  updateProduct(product: IProduct): void {
    // var image: String = ""
    // if (product != undefined) {
    //   image = product.image;
    // }

    const _products = {
      id: product.id,
      category: product.category,
      nameUA: product.nameUA,
      nameEN: product.nameEN,
      description: product.description,
      price: product.price,
      weight: product.weight,
      count: product.count,
      image: product.image,
      size: product.size,
    };
    this.firestore
      .collection<IProduct>('products')
      .doc(product.id.toString())
      .set(_products);
  }

}
