import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './#pages/+account/login-page/login-page.component';
import { CartPageComponent } from './#pages/+store/cart-page/cart-page.component';
import { CarsPageComponent } from './#pages/+account/cars-page/cars-page.component';
import { RentalPageComponent } from './#pages/+store/rental-page/rental-page.component';
import { AppComponent } from './app.component';
import { FramePageComponent } from './#pages/+master/frame.page';
import { VehiclePageComponent } from './#pages/+store/vehicle-page/vehicle-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    CarsPageComponent,
    CartPageComponent,
    RentalPageComponent,
    FramePageComponent,
    VehiclePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
