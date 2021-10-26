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
}
