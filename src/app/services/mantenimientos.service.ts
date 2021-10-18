import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimientos } from '../interfaces/mantenimientos';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {
  
  apiURL = "";

  constructor(private http: HttpClient) { }

  public getMantenimientos(): Observable<Mantenimientos[]> {
    return this.http.get<Mantenimientos[]>(`${this.apiURL}/mantenimientos`);
  }

  public getMantenimiento(id: number): Observable<Mantenimientos> {
    return this.http.get<Mantenimientos>(`${this.apiURL}/mantenimientos/${id}`);
  }

  public addMantenimiento(mantenimiento: Mantenimientos): Observable<Mantenimientos> {
    return this.http.post<Mantenimientos>(`${this.apiURL}/mantenimientos`, mantenimiento);
  }

  public updateMantenimiento(mantenimiento: Mantenimientos): Observable<Mantenimientos> {
    return this.http.put<Mantenimientos>(`${this.apiURL}/mantenimientos`, mantenimiento);
  }

  public deleteMantenimiento(id: number): void {
    this.http.delete<void>(`${this.apiURL}/mantenimientos/${id}`);
  }

}
