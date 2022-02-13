import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HotelComponent } from './hotel/hotel.component';
import { MaterialModule } from './material.module';
import { SearchFormComponent } from './search-form/search-form.component';

const components = [
    HeaderComponent,
    SearchFormComponent,
    FooterComponent,
    HotelComponent
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: components,
    exports: components
})

export class SharedModule { }
