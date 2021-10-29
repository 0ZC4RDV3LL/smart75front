import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LabelUserService } from 'src/app/services/label-user.service';

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
  
  constructor(private fb: FormBuilder, private router: Router, private labelUser: LabelUserService) {
    const navigation = this.router.getCurrentNavigation();
  }

  onSubmit(): void {  

    this.labelUser.setlabelUser(this.addressForm.controls['username'].value);

    if(this.addressForm.controls['username'].value == 'usuario1' && this.addressForm.controls['password'].value == 'Smart75') {
      this.router.navigate(['home/empleados']);
      
    } else if(this.addressForm.controls['username'].value == 'usuario2' && this.addressForm.controls['password'].value == 'Smart75') {
      this.router.navigate(['home/empresas']);
      
    } else {
      alert('Usuario o contraseña son incorrectos');
      this.addressForm.controls['username'].setValue('');
      this.addressForm.controls['password'].setValue('');
      this.addressForm.controls['role'].setValue('');
    }   
  }
}
