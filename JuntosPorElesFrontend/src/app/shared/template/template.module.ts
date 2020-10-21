import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { SharedModule } from '../shared.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { SobreModule } from 'src/app/modules/sobre/sobre.module';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule,
    HomeModule,
    SobreModule,
  ]
})
export class TemplateModule { }
