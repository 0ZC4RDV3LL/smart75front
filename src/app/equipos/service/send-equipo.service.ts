import { Injectable } from '@angular/core';
import { Equipos } from '../equipos';

@Injectable({
  providedIn: 'root'
})
export class SendEquipoService {

  equipo!: Equipos;

  constructor() { }

  public setEquipo(e: Equipos): void {
    this.equipo = e;
  }

  public getEquipo(): Equipos {
    return this.equipo;
  }

  public clearData(): void {
    this.equipo.id = 0;
    this.equipo.cliente = 0;
    this.equipo.marca = '';
    this.equipo.modelo = '';
    this.equipo.numero_serial = '';
    this.equipo.observaciones = '';
    this.equipo.tipo = '';
  }
}
