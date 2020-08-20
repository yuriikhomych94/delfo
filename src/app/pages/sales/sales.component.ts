import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/services/sales.service';
import { ISales } from 'src/app/shared/interfaces/sales.interface';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  sales: Array<ISales> = [];

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit(): void {
    this._getSales(); 
  }


  private _getSales(): void {
    this.salesService.getSales().subscribe(data => {
      this.sales = data;
    });
  }

}
