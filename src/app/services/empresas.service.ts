import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresas } from '../interfaces/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

  public getEmpresas(): Observable<Empresas[]> {
    return this.http.get<Empresas[]>(`${environment.apiURL}/clientes/`);
  }

  public getEmpresa(id: number): Observable<Empresas> {
    return this.http.get<Empresas>(`${environment.apiURL}/clientes/${id}`)
  }

  public addEmpresa(empresa: Empresas): Observable<Empresas> {
    return this.http.post<Empresas>(`${environment.apiURL}/clientes/`, empresa);
  }

  public update(empresa: Empresas): Observable<Empresas> {
    return this.http.put<Empresas>(`${environment.apiURL}/clientes/`, empresa);
  }

  public deleteEmpresa(id: number): void {
    this.http.delete<void>(`${environment.apiURL}/clientes/${id}`);
  }
}
