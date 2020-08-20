import { Injectable } from '@angular/core';
import { ISales } from '../interfaces/sales.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private firestore: AngularFirestore) {}

  getSales(): Observable<Array<ISales>> {
    return this.firestore.collection<ISales>('sales').valueChanges();
  }

  getCurrentSale(id: number): Observable<ISales> {
    return this.firestore
    .collection<ISales>('sales', (ref) => ref.where('id', '==', id))
    .get().source;
  } 

  addSales(sale: ISales): void {
    const _sales = {
      id: sale.id,
      name: sale.name,
      description: sale.description,
      image: sale.image
    };

    this.firestore
      .collection<ISales>('sales')
      .doc(sale.id.toString())
      .set(_sales);
  }

  deleteSales(sale: ISales): void {
    this.firestore
      .collection<ISales>('sales')
      .doc(sale.id.toString())
      .delete();
  }

  updateSales(sale: ISales): void {
    const _sales = {
      id: sale.id,
      name: sale.name,
      description: sale.description,
      image: sale.image
    };
    this.firestore
      .collection<ISales>('sales')
      .doc(sale.id.toString())
      .set(_sales);
  }
   
  }

  
