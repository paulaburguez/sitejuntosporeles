import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';


@NgModule({
  declarations: [QuemSomosComponent],
  imports: [
    CommonModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
