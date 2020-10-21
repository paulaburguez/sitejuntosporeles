import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JunteSeNosComponent } from './junte-se-nos/junte-se-nos.component';

const routes: Routes = [
  { path: '', component: JunteSeNosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JunteSeNosRoutingModule { }
