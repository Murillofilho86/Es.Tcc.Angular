import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesPageComponent } from './list-vehicles-page/list-vehicles-page.component';
import { EditModalVehiclePageComponent } from './edit-modal-vehicle-page/edit-modal-vehicle-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListVehiclesPageComponent,
    EditModalVehiclePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListVehiclesPageComponent,
    EditModalVehiclePageComponent
  ]
})
export class VehicleModule { }
