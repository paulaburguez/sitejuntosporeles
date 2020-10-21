import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdoteComponent } from './adote/adote.component';

const routes: Routes = [
  { path: '', component: AdoteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoteRoutingModule { }
