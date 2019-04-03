import { PlanModule } from './pages/+plan/plan.module';
import { VehicleModule } from './pages/+vehicle/vehicle.module';
import { CustomerModule } from './pages/+customer/customer.module';
import { AccountModule } from './pages/+account/account.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RentalModule } from './pages/+rental/rental.module';
import { FramePageComponent } from './pages/master/frame.page';


@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RentalModule,
    AccountModule,
    CustomerModule,
    VehicleModule,
    PlanModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
