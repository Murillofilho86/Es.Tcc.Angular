import { DetailsModalRentalPageComponent } from './details-modal-rental-page/details-modal-rental-page.component';
import { ListRentalsPageComponent } from './list-rentals-page/list-rentals-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRentalPageComponent } from './create-rental-page/create-rental-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListRentalsPageComponent,
    CreateRentalPageComponent,
    DetailsModalRentalPageComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListRentalsPageComponent,
    CreateRentalPageComponent,
    DetailsModalRentalPageComponent
  ]
})
export class RentalModule { }
