import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformativoRoutingModule } from './informativo-routing.module';
import { InformativoComponent } from './informativo/informativo.component';


@NgModule({
  declarations: [InformativoComponent],
  imports: [
    CommonModule,
    InformativoRoutingModule
  ]
})
export class InformativoModule { }
