import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BaselayoutComponent } from './base-layout.component';
import { HomeComponent } from '../home/home.component';
import { ResultsComponent } from '../results/results.component';
import { SearchFilterPipe } from '../search.pipe';
import { FilterPipe } from '../filter.pipe';

const routes: Route[] = [
    {
        path: '',
        component: BaselayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'results',
                component: ResultsComponent
            },

        ]
    }
]

@NgModule({
    declarations: [
        BaselayoutComponent,
        HomeComponent,
        ResultsComponent,
        SearchFilterPipe,
        FilterPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
})
export class BaseLayoutModule { }