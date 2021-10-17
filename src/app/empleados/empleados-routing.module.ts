import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosFormularioComponent } from './empleados-formulario/empleados-formulario.component';
import { EmpleadosTablaComponent } from './empleados-tabla/empleados-tabla.component';

const routes: Routes = [
  {path: 'formulario', component: EmpleadosFormularioComponent},
  {path: '', component: EmpleadosTablaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
