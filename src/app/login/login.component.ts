import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    role: ['Administrador', Validators.required],
    
  });
  
  states = [
    {name: 'Técnico', abbreviation: 'tecnico'},
    {name: 'Admistrador', abbreviation: 'admin'},
    {name: 'Jefe de Área', abbreviation: 'jefe'}
  ];

  botonDeshabilitado = true;

  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  }

  onChange(): void {
    if(this.addressForm.valid) {
      this.botonDeshabilitado = false;
    }
  }

  onSubmit(): void {
    if (this.addressForm.value) {
      this.router.navigate(['home']);
    }  
  }
}
