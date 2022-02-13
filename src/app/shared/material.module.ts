import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';

const modules = [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRippleModule,
    MatSidenavModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatStepperModule
]

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule { }