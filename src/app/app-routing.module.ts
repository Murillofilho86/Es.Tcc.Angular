import { ListPlansPageComponent } from './pages/+plan/list-plans-page/list-plans-page.component';
import { AppComponent } from './app.component';
import { FramePageComponent } from './pages/master/frame.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/+account/login-page/login-page.component';
import { ListRentalsPageComponent } from './pages/+rental/list-rentals-page/list-rentals-page.component';
import { UserPageComponent } from './pages/+account/user-page/user-page.component';
import { ListVehiclesPageComponent } from './pages/+vehicle/list-vehicles-page/list-vehicles-page.component';
import { CreateRentalPageComponent } from './pages/+rental/create-rental-page/create-rental-page.component';
import { ListCustomerPageComponent } from './pages/+customer/list-customer-page/list-customer-page.component';
import { RegisterCustomerPageComponent } from './pages/+customer/register-customer-page/register-customer-page.component';

const routes: Routes = [
  {
    path: 'rental',
    component: FramePageComponent,
    children: [
      { path: 'list-rentals', component: ListRentalsPageComponent },
      { path: 'create-rental', component: CreateRentalPageComponent }

    ]
  },
  {
    path: 'customer',
    component: FramePageComponent,
    children: [
      { path: 'list-customers', component: ListCustomerPageComponent },
      { path: 'create-customer', component: RegisterCustomerPageComponent }

    ]
  },
  {
    path: 'vehicle',
    component: FramePageComponent,
    children: [
      { path: 'list-vehicles', component: ListVehiclesPageComponent }
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'user', component: UserPageComponent }
    ]
  },
  {
    path: 'plan',
    component: FramePageComponent,
    children: [
      { path: 'list-plans', component: ListPlansPageComponent }

    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: LoginPageComponent },
      { path: 'login', component: LoginPageComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
