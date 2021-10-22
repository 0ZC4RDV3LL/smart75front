import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosFormularioComponent } from './empleados/empleados-formulario/empleados-formulario.component';
import { EmpleadosTablaComponent } from './empleados/empleados-tabla/empleados-tabla.component';
import { EmpresasFormularioComponent } from './empresas/empresas-formulario/empresas-formulario.component';
import { EmpresasTablaComponent } from './empresas/empresas-tabla/empresas-tabla.component';
import { EquiposFormularioComponent } from './equipos/equipos-formulario/equipos-formulario.component';
import { EquiposTablaComponent } from './equipos/equipos-tabla/equipos-tabla.component';
import { LoginComponent } from './login/login.component';
import { MantenimientosFormularioComponent } from './mantenimientos/mantenimientos-formulario/mantenimientos-formulario.component';
import { MantenimientosTablaComponent } from './mantenimientos/mantenimientos-tabla/mantenimientos-tabla.component';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';

const routes: Routes = [
  // {path: 'empleados', loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)},
  // {path: 'empresas', loadChildren:() => import('./empresas/empresas.module').then(m => m.EmpresasModule)},
  // {path: 'equipos', loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)},
  // {path: 'mantenimientos', loadChildren: () => import('./mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)},
  { path: '', component: LoginComponent},
  { path: 'home', component: NavegacionComponent,
  children: [
    { path: 'empleados', component: EmpleadosTablaComponent},
    { path: 'empleados/formulario', component: EmpleadosFormularioComponent},
    { path: 'empresas', component: EmpresasTablaComponent},
    { path: 'empresas/formulario', component: EmpresasFormularioComponent},
    { path: 'equipos', component: EquiposTablaComponent},
    { path: 'equipos/formulario', component: EquiposFormularioComponent},
    { path: 'mantenimientos', component: MantenimientosTablaComponent},
    { path: 'mantenimientos/formulario', component: MantenimientosFormularioComponent},
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
