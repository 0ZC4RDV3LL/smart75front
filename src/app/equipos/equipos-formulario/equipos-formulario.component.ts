import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipos-formulario',
  templateUrl: './equipos-formulario.component.html',
  styleUrls: ['./equipos-formulario.component.css']
})
export class EquiposFormularioComponent {
  addressForm = this.fb.group({
    tipo: [null, Validators.required],
    marca: [null, Validators.required],
    serial: [null, Validators.required],
    modelo: [null, Validators.required],
    observaciones: [null, Validators.required]    
  });

  hasUnitNumber = false;
  
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {

    if (this.addressForm.valid) {
      alert('El equipo fue agregado correctamente');
      
    } else {
      alert('Por favor, llenar todos los campos');
    }
  }
}
