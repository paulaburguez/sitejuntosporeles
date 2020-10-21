import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JunteSeNosRoutingModule } from './junte-se-nos-routing.module';
import { JunteSeNosComponent } from './junte-se-nos/junte-se-nos.component';


@NgModule({
  declarations: [JunteSeNosComponent],
  imports: [
    CommonModule,
    JunteSeNosRoutingModule
  ]
})
export class JunteSeNosModule { }
