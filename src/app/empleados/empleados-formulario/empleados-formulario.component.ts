import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/empleados/empleados';
import { EmpleadosService } from 'src/app/empleados/service/empleados.service';
import { SendEmpleadoService } from '../service/send-empleado.service';

@Component({
  selector: 'app-empleados-formulario',
  templateUrl: './empleados-formulario.component.html',
  styleUrls: ['./empleados-formulario.component.css']
})
export class EmpleadosFormularioComponent implements OnInit{

  addressForm = this.fb.group({
    id: 0,
    nombre_completo: [null, Validators.required],
    email: [null, Validators.required],
    telefono: [null, Validators.compose([
      Validators.required, Validators.minLength(7), Validators.maxLength(10)])
    ],
    rol: ['tecnico', Validators.required]
  });  
  
  constructor(private fb: FormBuilder, private router: Router, private empleadosService: EmpleadosService, private se: SendEmpleadoService) {
    const navigation = this.router.getCurrentNavigation();    
  }
  ngOnInit(): void {
   const empleado = this.se.getEmpleado();
   console.log(empleado);

   if (empleado !== undefined) {
     this.addressForm.controls['id'].setValue(empleado.id);
     this.addressForm.controls['nombre_completo'].setValue(empleado.nombre_completo);
     this.addressForm.controls['email'].setValue(empleado.email);
     this.addressForm.controls['telefono'].setValue(empleado.telefono);
     this.addressForm.controls['rol'].setValue(empleado.rol);     
   }
  
  }

  onSubmit(): void {
    if (this.addressForm.controls['id'].value == 0) {

      this.empleadosService.addEmpleado(this.addressForm.value).subscribe(
        (response: Empleados) => { console.log(response) },
        (error: HttpErrorResponse) => {alert(error.message)}        
      );
    } else {
      this.empleadosService.updateEmpleado(this.addressForm.value).subscribe(
        (response: Empleados) => {console.log(response)},
        (err: HttpErrorResponse) => {alert(err.message)}
      )
    }
    this.router.navigate(['home/empleados']);      
  }
}
