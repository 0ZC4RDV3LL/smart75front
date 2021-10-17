import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosFormularioComponent } from './empleados/empleados-formulario/empleados-formulario.component';
import { EmpleadosTablaComponent } from './empleados/empleados-tabla/empleados-tabla.component';
import { EmpresasFormularioComponent } from './empresas/empresas-formulario/empresas-formulario.component';
import { EmpresasTablaComponent } from './empresas/empresas-tabla/empresas-tabla.component';
import { EquiposFormularioComponent } from './equipos/equipos-formulario/equipos-formulario.component';
import { EquiposTablaComponent } from './equipos/equipos-tabla/equipos-tabla.component';
import { MantenimientosFormularioComponent } from './mantenimientos/mantenimientos-formulario/mantenimientos-formulario.component';
import { MantenimientosTablaComponent } from './mantenimientos/mantenimientos-tabla/mantenimientos-tabla.component';
import { MaterialModule } from './material.module';

import { ModuleTreeComponent } from './shared/module-tree/module-tree.component';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ModuleTreeComponent,
    EmpresasTablaComponent,
    EmpresasFormularioComponent,
    EmpleadosTablaComponent,
    EmpleadosFormularioComponent,
    EquiposTablaComponent,
    EquiposFormularioComponent,
    MantenimientosTablaComponent,
    MantenimientosFormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
