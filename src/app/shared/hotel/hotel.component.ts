import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input('data') hotel: any;

  constructor() { }

  ngOnInit(): void { }

  stars(rating: any) {
    let arr: any[] = [];
    for (let index = 0; index < rating; index++) {
      arr.push(rating);
    }
    return arr;
  }

}
