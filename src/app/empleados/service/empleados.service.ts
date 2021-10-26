import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Empleados } from 'src/app/empleados/empleados';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }  

  public getEmpleados(): Observable<Empleados[]> {
    return this.http.get<Empleados[]>(`${environment.apiURL}/empleados`);
  }

  public getEmpleado(id: number): Observable<Empleados> {
    return this.http.get<Empleados>(`${environment.apiURL}/empleados/${id}`);
  }

  public addEmpleado(empleado: Empleados): Observable<Empleados> {
    return this.http.post<Empleados>(`${environment.apiURL}/empleados/`, empleado, this.httpOptions);
  }

  public updateEmpleado(empleado: Empleados): Observable<Empleados> {
    const id = empleado.id;
    return this.http.put<Empleados>(`${environment.apiURL}/empleados/${id}`, empleado);
  }

  public deleteEmpleado(id: number): Observable<Empleados> {
    return this.http.delete<Empleados>(`${environment.apiURL}/empleados/${id}`);
  }
}
