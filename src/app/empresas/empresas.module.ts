import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasTablaComponent } from './empresas-tabla/empresas-tabla.component';
import { EmpresasFormularioComponent } from './empresas-formulario/empresas-formulario.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    EmpresasTablaComponent,
    EmpresasFormularioComponent,
  ],
  imports: [
    // CommonModule,
    EmpresasRoutingModule,
    MaterialModule,
  ]
})
export class EmpresasModule { }
