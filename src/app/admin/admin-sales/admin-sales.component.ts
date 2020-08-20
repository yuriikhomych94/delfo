import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISales } from 'src/app/shared/interfaces/sales.interface';
import { SalesService } from 'src/app/shared/services/sales.service';
import { Sales } from 'src/app/shared/models/sales.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.scss']
})
export class AdminSalesComponent implements OnInit, OnDestroy {

  adminSales: Array<ISales> = [];

  saleName: string;
  saleDescription: string;
  saleImage: string;
  saleID: number;
  isEdit: boolean = false;

  private _subscription: Subscription;


  constructor(
    private _salesService: SalesService
  ) { }

  ngOnInit(): void {
    this._getAdminSales();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private _getAdminSales(): void {
    this._subscription = this._salesService.getSales().subscribe(data => {
      this.adminSales = data;
    });

  }



  addSale(): void {
    const newSale: ISales = new Sales(
      1,
      this.saleName,
      this.saleDescription,
      this.saleImage
    );
    if (!this.isEdit) {
      if (this.adminSales.length > 0) {
        newSale.id = this.adminSales.slice(-1)[0].id + 1;
      }
      this._salesService.addSales(newSale);
    } else {
      newSale.id = this.saleID;
      this._salesService.updateSales(newSale);
      this.isEdit = false;
    }
    this._salesService.addSales(newSale);

    this._resetForm();
  }



  deleteSale(sale: ISales): void {
    this._salesService.deleteSales(sale);
  }




  editSale(sale: ISales): void {
    this.isEdit = true;
    this.saleID = sale.id;
    this.saleName = sale.name;
    this.saleDescription = sale.description;
    this.saleImage = sale.image;
  }

  private _resetForm(): void {
    this.saleName = '';
    this.saleDescription = '';
    this.saleImage = '';
  }

}
