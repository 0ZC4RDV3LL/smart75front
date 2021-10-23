import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/interfaces/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-formulario',
  templateUrl: './empleados-formulario.component.html',
  styleUrls: ['./empleados-formulario.component.css']
})
export class EmpleadosFormularioComponent {

  addressForm = this.fb.group({
    nombre_completo: [null, Validators.required],
    email: [null, Validators.required],
    telefono: [null, Validators.compose([
      Validators.required, Validators.minLength(7), Validators.maxLength(10)])
    ],
    rol: ['tecnico', Validators.required]
  });  
  
  constructor(private fb: FormBuilder, private router: Router, private empleadosService: EmpleadosService) {
    const navigation = this.router.getCurrentNavigation();
    
  }  

  onSubmit(): void {
    if (this.addressForm.valid) { 

      this.empleadosService.addEmpleado(this.addressForm.value).subscribe(
        (response: Empleados) => { console.log(response) },
        (error: HttpErrorResponse) => {alert(error.message)}
        
      );
      this.router.navigate(['home/empleados']);
      console.log(this.addressForm.value); 
    }
  }
}
