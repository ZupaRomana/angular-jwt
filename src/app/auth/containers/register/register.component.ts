import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  get form() { return this.registerForm.controls; }

  register() {
    this.authService.register(
      {
        username: this.form.username.value,
        password: this.form.password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/login']);
      }
    });
  }

}
