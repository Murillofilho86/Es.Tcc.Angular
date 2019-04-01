import { UserPageComponent } from './user-page/user-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    LoginPageComponent,
    UserPageComponent
  ]
})
export class AccountModule { }
