import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
