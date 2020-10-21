import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformativoComponent } from './informativo/informativo.component';

const routes: Routes = [
  { path: '', component: InformativoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformativoRoutingModule { }
