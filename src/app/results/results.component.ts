import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, filter, debounceTime, distinctUntilChanged, tap, BehaviorSubject } from 'rxjs';
import hotels from '../hotels.json';

export interface Hotel {
  id: number;
  name: string;
  address: string;
  hotel_rating: number
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  hotels: any[] = hotels;
  fiveStarHotels: any;
  fourStarHotels: any;
  threeStarHotels: any;
  twoStarHotels: any;
  oneStarHotels: any;
  selectedHotels: any;
  destination: any;

  searchFilter: any = '';
  query: any;

  filterItems = [
    {
      value: '5',
      checked: false
    },
    {
      value: '4',
      checked: false
    },
    {
      value: '3',
      checked: false
    },
    {
      value: '2',
      checked: false
    },
    {
      value: '1',
      checked: false
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      this.destination = params.params.destination;

      this.selectedHotels = this.hotels.filter(hotel => hotel.city == params.params.destination);

      this.fiveStarHotels = this.selectedHotels.filter((hotel: Hotel) => hotel.hotel_rating == 5);
      this.fourStarHotels = this.selectedHotels.filter((hotel: Hotel) => hotel.hotel_rating == 4);
      this.threeStarHotels = this.selectedHotels.filter((hotel: Hotel) => hotel.hotel_rating == 3);
      this.twoStarHotels = this.selectedHotels.filter((hotel: Hotel) => hotel.hotel_rating == 2);
      this.oneStarHotels = this.selectedHotels.filter((hotel: Hotel) => hotel.hotel_rating == 1);
    }); // output: 


  }

  getCount(hotels:any, stars:any) {
    let data = hotels.filter((hotel: Hotel) => hotel.hotel_rating == stars);
    return data.length;
  }

  checked() {
    return this.filterItems.filter(item => { return item.checked; });
  }

  stars(rating: any) {
    let arr: any[] = [];
    for (let index = 0; index < rating; index++) {
      arr.push(rating);
    }
    return arr;
  }

}
