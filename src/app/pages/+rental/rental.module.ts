import { ListRentalsPageComponent } from './list-rentals-page/list-rentals-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesPageComponent } from './list-vehicles-page/list-vehicles-page.component';

@NgModule({
  declarations: [
    ListRentalsPageComponent,
    ListVehiclesPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListRentalsPageComponent,
    ListVehiclesPageComponent
  ]
})
export class RentalModule { }
