import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-formulario',
  templateUrl: './empleados-formulario.component.html',
  styleUrls: ['./empleados-formulario.component.css']
})
export class EmpleadosFormularioComponent {
  addressForm = this.fb.group({
    nombre: [null, Validators.required],
    correo: [null, Validators.required],
    telefono: [null, Validators.compose([
      Validators.required, Validators.minLength(7), Validators.maxLength(10)])
    ],
    rol: ['tecnico', Validators.required]
  });
  
  botonDeshabilitado = true;
  
  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  }

  onChange():void {
    if(this.addressForm.valid) {
      this.botonDeshabilitado = false;
    }
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.router.navigate(['home/empleados']);
    }
  }
}
