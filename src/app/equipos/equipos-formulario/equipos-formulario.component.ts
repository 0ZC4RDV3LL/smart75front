import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  botonDeshabilitado = true;
  
  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  }

  onChange(): void {
    if (this.addressForm.valid) {
      this.botonDeshabilitado = false;
    }
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.router.navigate(['home/equipos']);
    } 
  }
}
