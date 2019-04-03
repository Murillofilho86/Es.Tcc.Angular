import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlansPageComponent } from './list-plans-page/list-plans-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListPlansPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListPlansPageComponent
  ]
})
export class PlanModule { }
