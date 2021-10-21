import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  apiURL = 'https://smart75-mintic.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  public getEmpleados(): Observable<Empleados[]> {
    return this.http.get<Empleados[]>(`${this.apiURL}/empleados`);
  }

  public getEmpleado(id: number): Observable<Empleados> {
    return this.http.get<Empleados>(`${this.apiURL}/empleados/${id}`);
  }

  public addEmpleado(empleado: Empleados): Observable<Empleados>{
    return this.http.post<Empleados>(`${this.apiURL}/empleados`, empleado);
  }

  public updateEmpleado(empleado: Empleados): Observable<Empleados> {
    return this.http.put<Empleados>(`${this.apiURL}/empleados`, empleado);
  }

  public deleteEmpleado(id: number): void {
    this.http.delete(`${this.apiURL}/empleados/${id}`);
  }
}
