import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mantenimientos } from 'src/app/mantenimientos/mantenimientos';
import { MantenimientosService } from 'src/app/mantenimientos/service/mantenimientos.service';
import { SendMantenimientoService } from '../service/send-mantenimiento.service';

@Component({
  selector: 'app-mantenimientos-formulario',
  templateUrl: './mantenimientos-formulario.component.html',
  styleUrls: ['./mantenimientos-formulario.component.css']
})
export class MantenimientosFormularioComponent implements OnInit{
  addressForm = this.fb.group({
    id: null,
    costo: [null, Validators.required],
    fecha_entrada: [null, Validators.required],
    fecha_salida: [null, Validators.required],
    estado: false,
    equipo: [null, Validators.required],
    empleado: [null, Validators.required],    
    observaciones: [null, Validators.required]
  });  

  hoy = new Date();

  constructor(private fb: FormBuilder, private router: Router, private mantenimientosService: MantenimientosService, private sm: SendMantenimientoService) {
   
  }
  ngOnInit(): void {
    const mantenimiento: Mantenimientos = this.sm.getMantenimiento();
    if (mantenimiento !== undefined) {
      this.addressForm.controls['id'].setValue(mantenimiento.id);
      this.addressForm.controls['costo'].setValue(mantenimiento.costo);
      this.addressForm.controls['fecha_entrada'].setValue(mantenimiento.fecha_entrada);
      this.addressForm.controls['fecha_salida'].setValue(mantenimiento.fecha_salida);
      this.addressForm.controls['estado'].setValue(mantenimiento.estado);
      this.addressForm.controls['equipo'].setValue(mantenimiento.equipo);
      this.addressForm.controls['empleado'].setValue(mantenimiento.empleado);
      this.addressForm.controls['observaciones'].setValue(mantenimiento.observaciones);
      
    }
  }

  onSubmit(): void {
    if(this.addressForm.controls['id'].value == null) {
      this.mantenimientosService.addMantenimiento(this.addressForm.value).subscribe( 
        (response: Mantenimientos) => { console.log(response); },
        (err: HttpErrorResponse) => {alert(err.message)}
      )

    } else {
      this.mantenimientosService.updateMantenimiento(this.addressForm.value).subscribe(
        (response: Mantenimientos) => { console.log(response); },
        (err: HttpErrorResponse) => {alert(err.message)}
      )
    }
    
    this.router.navigate(['home/mantenimientos']);
  }
}
