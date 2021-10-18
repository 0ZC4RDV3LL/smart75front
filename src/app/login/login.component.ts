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
    role: [null, Validators.required],
    
  });
  
  states = [
    {name: 'Técnico', abbreviation: 'tecnico'},
    {name: 'Admistrador', abbreviation: 'admin'},
    {name: 'Jefe de Área', abbreviation: 'jefe'}
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  }

  onSubmit(): void {
    if (this.addressForm.valid && this.addressForm.value) {
      this.router.navigate(['home']);
    } else {
      alert('Los campos requeridos deben ser llenados!');
    }    
  }
}
