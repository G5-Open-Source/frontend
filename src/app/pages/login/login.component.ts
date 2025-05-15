import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.email.value;
      const password = this.password.value;

      const storedUser = localStorage.getItem('registeredUser');

      if (storedUser) {
        const user = JSON.parse(storedUser);

        if (user.email === email && user.password === password) {
          console.log('Login exitoso');
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this.router.navigate(['/home']);
        } else {
          alert('Correo o contraseña incorrectos');
        }
      } else {
        alert('No hay usuarios registrados. Serás redirigido al registro.');
        this.router.navigate(['/register']);
      }
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
