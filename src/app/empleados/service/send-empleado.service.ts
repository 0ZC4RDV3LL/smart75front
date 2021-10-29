import { Injectable } from '@angular/core';
import { Empleados } from '../empleados';

@Injectable({
  providedIn: 'root'
})
export class SendEmpleadoService {

  empleado!: Empleados

  constructor() { }

  public setEmpleado(e: Empleados):void {
    this.empleado = e;
  }

  public getEmpleado(): Empleados {
    return this.empleado;
  }

  public clearData(): void {
    this.empleado.id = 0;
    this.empleado.email = '';
    this.empleado.nombre_completo = '';
    this.empleado.telefono = '';
    this.empleado.rol = '';
  }
  
}
