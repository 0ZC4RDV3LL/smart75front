import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasFormularioComponent } from './empresas-formulario/empresas-formulario.component';
import { EmpresasTablaComponent } from './empresas-tabla/empresas-tabla.component';

const routes: Routes = [
  {path: 'formulario', component: EmpresasFormularioComponent},
  {path: '', component: EmpresasTablaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
