import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mantenimientos } from 'src/app/mantenimientos/mantenimientos';
import { MantenimientosService } from 'src/app/mantenimientos/service/mantenimientos.service';

@Component({
  selector: 'app-mantenimientos-formulario',
  templateUrl: './mantenimientos-formulario.component.html',
  styleUrls: ['./mantenimientos-formulario.component.css']
})
export class MantenimientosFormularioComponent {
  addressForm = this.fb.group({
    costo: [null, Validators.required],
    fecha_entrada: [null, Validators.required],
    fecha_salida: [null, Validators.required],
    estado: false,
    equipo: [null, Validators.required],
    empleado: [null, Validators.required],    
    observaciones: [null, Validators.required]
  });  

  hoy = new Date();

  constructor(private fb: FormBuilder, private router: Router, private mantenimientosService: MantenimientosService) {
    const navigation = this.router.getCurrentNavigation();
  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    const values: Mantenimientos[] = this.addressForm.value;
    console.log(values.keys);
    
    
    this.mantenimientosService.addMantenimiento(this.addressForm.value).subscribe( 
      (response: Mantenimientos) => { console.log(response); },
      (err: HttpErrorResponse) => {alert(err.message)}
    )
    this.router.navigate(['home/mantenimientos']);
  }
}
