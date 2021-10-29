import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipos } from 'src/app/equipos/equipos';
import { EquiposService } from 'src/app/equipos/service/equipos.service';
import { SendEquipoService } from '../service/send-equipo.service';
import { EmpresasService } from 'src/app/empresas/service/empresas.service';
import { Empresas } from 'src/app/empresas/empresas';

@Component({
  selector: 'app-equipos-formulario',
  templateUrl: './equipos-formulario.component.html',
  styleUrls: ['./equipos-formulario.component.css']
})
export class EquiposFormularioComponent implements OnInit{
  addressForm = this.fb.group({
    id: 0,
    tipo: [null, Validators.required],
    marca: [null, Validators.required],
    numero_serial: [null, Validators.required],
    modelo: [null, Validators.required],
    cliente: [null, Validators.required],
    observaciones: [null, Validators.required]
  });

  empresas: Empresas[] = [];
  
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private equipoService: EquiposService, 
    private se: SendEquipoService,
    private empresasService: EmpresasService) {
    const navigation = this.router.getCurrentNavigation();
  }
  ngOnInit(): void {
    this.selectCliente();
    const equipo: Equipos = this.se.getEquipo();

    if (equipo !== undefined) {
      this.addressForm.controls['id'].setValue(equipo.id);
      this.addressForm.controls['tipo'].setValue(equipo.tipo);
      this.addressForm.controls['marca'].setValue(equipo.marca);
      this.addressForm.controls['numero_serial'].setValue(equipo.numero_serial);
      this.addressForm.controls['modelo'].setValue(equipo.modelo);
      this.addressForm.controls['cliente'].setValue(equipo.cliente);
      this.addressForm.controls['observaciones'].setValue(equipo.observaciones);
    }

    this.se.clearData();
  }

  selectCliente(): void {
    this.empresasService.getEmpresas().subscribe(
      (empresas: Empresas[]) => {this.empresas = empresas;}
    )
  }

  onSubmit(): void {
    console.log(this.addressForm.value);

    if(this.addressForm.controls['id'].value == 0) {
      this.equipoService.addEquipo(this.addressForm.value).subscribe(
        (response: Equipos) => {console.log(response);},
        (err: HttpErrorResponse) => {alert(err.message)}
      );

    } else {
      this.equipoService.updateEquipo(this.addressForm.value).subscribe(
        (response: Equipos) => {console.log(response);},
        (err: HttpErrorResponse) => {alert(err.message)}
      )
    }
    
    this.router.navigate(['home/equipos']);
     
  }
}
