import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  addData(email: NgModel, password: NgModel) {
    console.log(email);
    console.log(password);
  }

  

}
