import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulacionComponent } from './views/pages/simulacion/simulacion.component';
import { ValidacionComponent } from './views/pages/validacion/validacion.component';

import {BaseComponent} from './views/theme/base/base.component';


const routes: Routes = [
  {path:'', redirectTo: 'simulacion', pathMatch: 'full'},
  {path:'simulacion', component: SimulacionComponent},
  {path: 'validacion', component: ValidacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
