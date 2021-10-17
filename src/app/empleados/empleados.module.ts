import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosTablaComponent } from './empleados-tabla/empleados-tabla.component';
import { EmpleadosFormularioComponent } from './empleados-formulario/empleados-formulario.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    EmpleadosTablaComponent,
    EmpleadosFormularioComponent,
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    MaterialModule,
  ]
})
export class EmpleadosModule { }
