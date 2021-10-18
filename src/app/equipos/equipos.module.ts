import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
// import { EquiposTablaComponent } from './equipos-tabla/equipos-tabla.component';
// import { EquiposFormularioComponent } from './equipos-formulario/equipos-formulario.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    // EquiposTablaComponent,
    // EquiposFormularioComponent,
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    MaterialModule
  ]
})
export class EquiposModule { }
