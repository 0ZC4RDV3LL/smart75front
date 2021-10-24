import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LabelUserService } from '../services/label-user.service';

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

    if (this.addressForm.value) {
      this.router.navigate(['home']);
    }  
  }
}
