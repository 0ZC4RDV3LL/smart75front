import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipos } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-equipos-formulario',
  templateUrl: './equipos-formulario.component.html',
  styleUrls: ['./equipos-formulario.component.css']
})
export class EquiposFormularioComponent {
  addressForm = this.fb.group({
    tipo: [null, Validators.required],
    marca: [null, Validators.required],
    numero_serial: [null, Validators.required],
    modelo: [null, Validators.required],
    cliente: [null, Validators.required],
    observaciones: [null, Validators.required]
  });
  
  constructor(private fb: FormBuilder, private router: Router, private equipoService: EquiposService) {
    const navigation = this.router.getCurrentNavigation();
  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    
    this.equipoService.addEquipo(this.addressForm.value).subscribe(
      (response: Equipos) => {console.log(response);},
      (err: HttpErrorResponse) => {alert(err.message)}
    );
    this.router.navigate(['home/equipos']);
     
  }
}
