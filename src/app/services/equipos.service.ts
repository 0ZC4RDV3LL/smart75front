import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipos } from '../interfaces/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  apiURL = "https://smart75-mintic.herokuapp.com/api";

  constructor(private http: HttpClient) { }

  public getEquipos(): Observable<Equipos[]>{
    return this.http.get<Equipos[]>(`${this.apiURL}/equipos/`);
  }

  public getEquipo(id: number): Observable<Equipos>{
    return this.http.get<Equipos>(`${this.apiURL}/equipos/${id}`);
  }

  public addEquipo(equipo: Equipos): Observable<Equipos>{
    return this.http.post<Equipos>(`${this.apiURL}/equipos/`, equipo);
  }

  public updateEquipo(equipo: Equipos): Observable<Equipos> {
    return this.http.put<Equipos>(`${this.apiURL}/equipos/`, equipo);
  }

  public deleteEquipo(id: number): void {
    this.http.delete<void>(`${this.apiURL}/equipos/${id}`);
  }
}
