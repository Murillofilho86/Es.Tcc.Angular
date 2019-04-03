import { EditModalCustomerPageComponent } from './edit-modal-customer-page/edit-modal-customer-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCustomerPageComponent } from './register-customer-page/register-customer-page.component';
import { ListCustomerPageComponent } from './list-customer-page/list-customer-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterCustomerPageComponent,
    ListCustomerPageComponent,
    EditModalCustomerPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    RegisterCustomerPageComponent,
    ListCustomerPageComponent,
    EditModalCustomerPageComponent
  ]
})
export class CustomerModule { }
