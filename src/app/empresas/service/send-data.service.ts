import { Injectable } from '@angular/core';
import { Empresas } from '../empresas';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  id = 0;
  razon_social = '';
  nit = 0;
  direccion = '';
  ciudad = '';
  contacto = '';
  email = '';
  telefono = 0;
  
  
  constructor() {  
  }

  public setEmpresa(id: number, razon_social: string, nit: number, direccion: string, ciudad: string, contacto: string, email: string, telefono: number): void {
    this.id = id;
    this.razon_social = razon_social;
    this.nit = nit;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.contacto = contacto;
    this.email = email;
    this.telefono = telefono;
  }
  

  public getEmpresa(): any {
    return {
      id: this.id,
      razon_social: this.razon_social,
      nit: this.nit,
      direccion: this.direccion,
      ciudad: this.ciudad,
      contacto: this.contacto,
      email: this.email,
      telefono: this.telefono
     }
  }

}
