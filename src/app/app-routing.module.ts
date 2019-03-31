import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './#pages/+master/frame.page';
import { LoginPageComponent } from './#pages/+account/login-page/login-page.component';
import { CarsPageComponent } from './#pages/+account/cars-page/cars-page.component';
import { CartPageComponent } from './#pages/+store/cart-page/cart-page.component';
import { RentalPageComponent } from './#pages/+store/rental-page/rental-page.component';
import { VehiclePageComponent } from './#pages/+store/vehicle-page/vehicle-page.component';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: VehiclePageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'rental', component: RentalPageComponent }
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'cars', component: CarsPageComponent }
    ]
  },
  { path: 'login', component: LoginPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
