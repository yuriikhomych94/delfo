import { Component } from '@angular/core';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'delfo';

  ngOnInit(): void {
    AOS.init();
  }

  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  enter(i) {
    this.hoverState = i;
  }

  leave(i) {
    this.hoverState = 0;
  }

  updateRating(i) {
    this.rating = i;
  }


}
