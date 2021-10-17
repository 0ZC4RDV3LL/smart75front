import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MantenimientosFormularioComponent } from './mantenimientos-formulario/mantenimientos-formulario.component';
import { MantenimientosTablaComponent } from './mantenimientos-tabla/mantenimientos-tabla.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    MantenimientosFormularioComponent,
    MantenimientosTablaComponent
  ],
  imports: [
    CommonModule,
    MantenimientosRoutingModule,
    MaterialModule,
  ],
  exports: [
    MantenimientosFormularioComponent,
    MantenimientosTablaComponent,
  ]
})
export class MantenimientosModule { }
