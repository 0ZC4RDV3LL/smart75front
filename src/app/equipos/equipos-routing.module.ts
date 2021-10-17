import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposFormularioComponent } from './equipos-formulario/equipos-formulario.component';
import { EquiposTablaComponent } from './equipos-tabla/equipos-tabla.component';

const routes: Routes = [
  {path: 'formulario', component: EquiposFormularioComponent},
  {path: '', component: EquiposTablaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule { }
