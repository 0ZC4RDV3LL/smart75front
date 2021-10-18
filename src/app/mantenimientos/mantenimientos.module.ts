import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MantenimientosRoutingModule,
    MaterialModule,
  ],
  exports: []
})
export class MantenimientosModule { }
