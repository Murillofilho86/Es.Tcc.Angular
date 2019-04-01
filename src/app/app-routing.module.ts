import { AppComponent } from './app.component';
import { ListVehiclesPageComponent } from './pages/+rental/list-vehicles-page/list-vehicles-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/+account/login-page/login-page.component';
import { ListRentalsPageComponent } from './pages/+rental/list-rentals-page/list-rentals-page.component';
import { UserPageComponent } from './pages/+account/user-page/user-page.component';

const routes: Routes = [
  {
    path: 'rental',
    component: FramePageComponent,
    children: [
      { path: 'list-rentals', component: ListRentalsPageComponent },
      { path: 'list-vehicles', component: ListVehiclesPageComponent }
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'user', component: UserPageComponent}
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', component: LoginPageComponent },
      {path: 'login', component: LoginPageComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
