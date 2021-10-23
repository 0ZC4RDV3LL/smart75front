import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipos } from 'src/app/equipos/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  public getEquipos(): Observable<Equipos[]>{
    return this.http.get<Equipos[]>(`${environment.apiURL}/equipos/`);
  }

  public getEquipo(id: number): Observable<Equipos>{
    return this.http.get<Equipos>(`${environment.apiURL}/equipos/${id}`);
  }

  public addEquipo(equipo: Equipos): Observable<Equipos>{
    return this.http.post<Equipos>(`${environment.apiURL}/equipos/`, equipo);
  }

  public updateEquipo(equipo: Equipos): Observable<Equipos> {
    return this.http.put<Equipos>(`${environment.apiURL}/equipos/`, equipo);
  }

  public deleteEquipo(id: number): Observable<Equipos> {
    return this.http.delete<Equipos>(`${environment.apiURL}/equipos/${id}`);
  }
}
