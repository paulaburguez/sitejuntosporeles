import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoteRoutingModule } from './adote-routing.module';
import { AdoteComponent } from './adote/adote.component';


@NgModule({
  declarations: [AdoteComponent],
  imports: [
    CommonModule,
    AdoteRoutingModule
  ]
})
export class AdoteModule { }
