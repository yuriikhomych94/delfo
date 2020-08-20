import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/shared/services/sales.service';
import { ISales } from 'src/app/shared/interfaces/sales.interface';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {

  sale: ISales;


  constructor(
    private _router: ActivatedRoute,
    private _salesService: SalesService
  ) { }

  ngOnInit(): void {
    this._getSale();
  }

  private _getSale(): void {
    const id = +this._router.snapshot.paramMap.get('id'); 
    this._salesService.getCurrentSale(id).subscribe(data => {
      this.sale = data;
    });
  }



}
