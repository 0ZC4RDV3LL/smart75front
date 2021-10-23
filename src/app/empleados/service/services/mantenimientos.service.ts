import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mantenimientos } from 'src/app/mantenimientos/mantenimientos';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {
 
  constructor(private http: HttpClient) { }

  public getMantenimientos(): Observable<Mantenimientos[]> {
    return this.http.get<Mantenimientos[]>(`${environment.apiURL}/mantenimientos/`);
  }

  public getMantenimiento(id: number): Observable<Mantenimientos> {
    return this.http.get<Mantenimientos>(`${environment.apiURL}/mantenimientos/${id}`);
  }

  public addMantenimiento(mantenimiento: Mantenimientos): Observable<Mantenimientos> {
    return this.http.post<Mantenimientos>(`${environment.apiURL}/mantenimientos/`, mantenimiento);
  }

  public updateMantenimiento(mantenimiento: Mantenimientos): Observable<Mantenimientos> {
    return this.http.put<Mantenimientos>(`${environment.apiURL}/mantenimientos/`, mantenimiento);
  }

  public deleteMantenimiento(id: number): Observable<Mantenimientos> {
    return this.http.delete<Mantenimientos>(`${environment.apiURL}/mantenimientos/${id}`);
  }

}
