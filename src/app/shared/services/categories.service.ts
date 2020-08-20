import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})

export class CategoriesService {
  constructor(private firestore: AngularFirestore) {}


  getCategory(): Observable<Array<ICategory>> {
    return this.firestore.collection<ICategory>('categories').valueChanges();
  }

  getOneCategory(id: number): Observable<ICategory> {
    return this.firestore
      .collection<ICategory>('categories', (ref) => ref.where('id', '==', id))
      .get().source;
  }

  addCategory(category: ICategory): void {
    console.log('Add catagory')
    console.log(category)

    const _category = {
      id: category.id,
      nameUA: category.nameUA,
      nameEN: category.nameEN,
    };
    this.firestore
      .collection<ICategory>('categories')
      .doc(category.id.toString())
      .set(_category);
  }

  deleteCategory(category: ICategory): void {
    this.firestore
      .collection<ICategory>('categories')
      .doc(category.id.toString())
      .delete();
  }

  updateCategory(category: ICategory): void {
    let _category = {
      id: category.id,
      nameUA: category.nameUA,
      nameEN: category.nameEN,
    };
    this.firestore
      .collection<ICategory>('categories')
      .doc(category.id.toString())
      .set(_category);
  }
}