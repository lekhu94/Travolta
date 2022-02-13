import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { startWith } from 'rxjs';
import { map, Observable } from 'rxjs';
import destinations from '../../destinations.json';


export interface Destination {
  id: number;
  name: string;
}

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  destinations: any[] = destinations;
  control = new FormControl();
  filteredDestinations!: Observable<Destination[]>;
  form!: FormGroup;
  minDate = new Date();
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      adult: ['', Validators.required],
      child: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.filteredDestinations = this.control.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.destinations.slice())),
    );
  }

  private _filter(name: string): Destination[] {
    const filterValue = name.toLowerCase();
    return this.destinations.filter(destination => destination.name.toLowerCase().includes(filterValue));
  }

  submit() {
    if (!this.control.value) {
      this.error = true;
      return;
    } else {
      this.error = false;
      this.router.navigate(['/results'], { queryParams: { destination: this.control.value } });
    }

  }

}
