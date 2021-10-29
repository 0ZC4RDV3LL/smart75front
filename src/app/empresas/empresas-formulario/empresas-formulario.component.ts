import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresas } from 'src/app/empresas/empresas';
import { EmpresasService } from 'src/app/empresas/service/empresas.service';
import { SendDataService } from '../service/send-data.service';

@Component({
  selector: 'app-empresas-formulario',
  templateUrl: './empresas-formulario.component.html',
  styleUrls: ['./empresas-formulario.component.css']
})
export class EmpresasFormularioComponent implements OnInit {
  addressForm = this.fb.group({
    id: 0,
    razon_social: [null, Validators.required],
    nit: [null, Validators.required],
    direccion: [null, Validators.required],
    ciudad: [null, Validators.required],
    contacto: [null, Validators.required],
    email: [null, Validators.required],
    telefono: [null, Validators.compose([
      Validators.required, Validators.minLength(7), Validators.maxLength(10)])
    ]
  });

  states = [
    {name: 'Bogotá', abbreviation: 'BO'},
    {name: 'Medellín', abbreviation: 'ME'},
    {name: 'Cali', abbreviation: 'CA'},
    {name: 'Bucaramanga', abbreviation: 'BU'},
    {name: 'Pasto', abbreviation: 'PA'},
    {name: 'Villavicencio', abbreviation: 'VI'},
    {name: 'Zipaquirá', abbreviation: 'ZI'},    
  ];

  constructor(private fb: FormBuilder, private router: Router, private empresasService: EmpresasService, private sended: SendDataService) {
    
  }

  ngOnInit() {

    const empresa = this.sended.getEmpresa();   
    
    if (empresa.id) {
      this.addressForm.setValue({
        id: empresa.id,
        razon_social: empresa.razon_social, 
        nit: empresa.nit, 
        direccion: empresa.direccion,
        ciudad: empresa.ciudad,
        contacto: empresa.contacto,
        email: empresa.email,
        telefono: empresa.telefono,
      });      
    }
    this.sended.clearData();
  }

  onSubmit(): void {

    if (this.addressForm.controls['id'].value == 0) {
      this.empresasService.addEmpresa(this.addressForm.value).subscribe(
        (response: Empresas) => {console.log(response)},
        (err: HttpErrorResponse) => {alert(err.message)}
      );      
    } else {
      this.empresasService.update(this.addressForm.value, this.addressForm.controls['id'].value).subscribe(
        (response: Empresas) => {console.log(response)},
        (err: HttpErrorResponse) => {alert(err.message)}
      )
    }
    setTimeout(() => {
      this.router.navigate(['home/empresas']);
    }, 300)
  }
  
}
