import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresas } from '../interfaces/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiURL = "";

  constructor(private http: HttpClient) { }

  public getEmpresas(): Observable<Empresas[]> {
    return this.http.get<Empresas[]>(`${this.apiURL}/clientes`);
  }

  public getEmpresa(id: number): Observable<Empresas> {
    return this.http.get<Empresas>(`${this.apiURL}/clientes/${id}`)
  }

  public addEmpresa(empresa: Empresas): Observable<Empresas> {
    return this.http.post<Empresas>(`${this.apiURL}/clientes`, empresa);
  }

  public update(empresa: Empresas): Observable<Empresas> {
    return this.http.put<Empresas>(`${this.apiURL}/clientes`, empresa);
  }

  public deleteEmpresa(id: number): void {
    this.http.delete<void>(`${this.apiURL}/clientes/${id}`);
  }
}
