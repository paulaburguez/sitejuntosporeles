import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('../../modules/home/home.module').then((m) => m.HomeModule)},
    { path: 'sobre', loadChildren: () => import('../../modules/sobre/sobre.module').then((m) => m.SobreModule)},
    { path: 'junte-se', loadChildren: () => import('../../modules/junte-se-nos/junte-se-nos.module').then((m) => m.JunteSeNosModule)},
    { path: 'cuidar-deles', loadChildren: () => import('../../modules/informativo/informativo.module').then((m) => m.InformativoModule)},
    { path: 'adote', loadChildren: () => import('../../modules/adote/adote.module').then((m) => m.AdoteModule)},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
