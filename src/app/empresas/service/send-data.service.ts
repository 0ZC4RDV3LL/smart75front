import { Injectable } from '@angular/core';
import { Empresas } from '../empresas';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  
  empresa!: Empresas;

  constructor() { }
  
  setEmpresa(empresa: Empresas) {
    this.empresa = empresa;
  }

  getEmpresa(): Empresas {
    return this.empresa;
  }

}
