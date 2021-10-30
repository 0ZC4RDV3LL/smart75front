import { Injectable } from '@angular/core';
import { Mantenimientos } from '../mantenimientos';

@Injectable({
  providedIn: 'root'
})
export class SendMantenimientoService {

  mantenimiento!: Mantenimientos;

  constructor() { }

  public setMantenimiento(m: Mantenimientos): void {
    this.mantenimiento = m;
  }

  public getMantenimiento(): Mantenimientos {
    return this.mantenimiento;
  }

  public clearData(): void {
    this.mantenimiento.id = 0;
    this.mantenimiento.costo = 0;
    this.mantenimiento.empleado = 0;
    this.mantenimiento.equipo = 0;
    this.mantenimiento.fecha_entrada = '';
    this.mantenimiento.fecha_salida = '';
    this.mantenimiento.observaciones = '';
  }
}
