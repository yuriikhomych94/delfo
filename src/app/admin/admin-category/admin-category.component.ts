import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  categoryID: number = 1;
  nameUA: string;
  nameEN: string;
  adminCategories: Array<ICategory> = [];
  isEdit: boolean = false;

  constructor(
    private _categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this._getCategory();
  }


  private _getCategory(): void {
    this._categoryService.getCategory().subscribe(data => {
      this.adminCategories = data;
    });
  }

  public addCategory(): void {
    const category: ICategory = new Category(
      1,
      this.nameUA,
      this.nameEN
    );
    if (this.adminCategories.length > 0) {
      category.id = this.adminCategories.slice(-1)[0].id + 1;
    }
    this._categoryService.addCategory(category);
    this.resetForm()
  }

  public deleteCategory(category: ICategory): void {
    this._categoryService.deleteCategory(category);
  }

  public editCategory(category: ICategory): void {
    this.isEdit = true;
    this.categoryID = category.id;
    this.nameUA = category.nameUA;
    this.nameEN = category.nameEN;
  }


  resetForm(): void {
    this.nameUA = '';
    this.nameEN = '';
  }

}
