import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  adminCategories: Array<ICategory> = [];
  adminProducts: Array<IProduct> = [];

  productCategory: ICategory;
  productNameUA: string;
  productNameEN: string;
  productDescription: string;
  productPrice: number;
  productWeight: string;
  productImage: string;

  //FireStorage
  uploadProgress: Observable<number>;


  constructor(
    private _categoryService: CategoriesService,
    private _productService: ProductsService,
    private _afStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this._getCategory();
    this._getProduct();
  }

  private _getCategory(): void {
    this._categoryService.getCategory().subscribe(data => {
      this.adminCategories = data;
    });
  }

  private _getProduct(): void {
    this._productService.getProduct();
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `images/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this._afStorage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then(e => {
      this._afStorage.ref(`images/${e.metadata.name}`).getDownloadURL().subscribe(url => {
        this.productImage = url;
      })
    });
  }


  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  addProduct(): void {
    const product: IProduct = new Product(
      1,
      this.productCategory,
      this.productNameUA,
      this.productNameEN,
      this.productDescription,
      this.productPrice,
      this.productWeight,
      1,
      this.productImage
    );

    console.log("Product image")
    console.log(this.productImage);

    if (this.adminProducts.length > 0) {
      product.id = this.adminProducts.slice(-1)[0].id + 1;
    }
    this._productService.addProduct(product);
    this._resetForm();
  }


  private _resetForm(): void {
    this.productNameUA = '';
    this.productNameEN = '';
    this.productDescription = '';
    this.productPrice = null;
    this.productWeight = '';
    this.productImage = '';
  }


}
