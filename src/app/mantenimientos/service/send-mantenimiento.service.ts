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
}
