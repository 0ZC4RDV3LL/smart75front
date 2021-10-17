import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MantenimientosFormularioComponent } from './mantenimientos-formulario/mantenimientos-formulario.component';
import { MantenimientosTablaComponent } from './mantenimientos-tabla/mantenimientos-tabla.component';

const routes: Routes = [
  {path: 'formulario', component: MantenimientosFormularioComponent},
  {path: '', component: MantenimientosTablaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientosRoutingModule { }
