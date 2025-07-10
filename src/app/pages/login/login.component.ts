import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FreelancerService } from '../application/freelancer.service';
import { StartupService } from '../application/startup.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private freelancerService: FreelancerService,
    private startupService: StartupService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // ✅ Getters para el template
  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  goToRegister() {
    this.router.navigate(['/select']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const { email, password } = this.loginForm.value;

    this.freelancerService.getAllFreelancers().subscribe({
      next: (freelancers) => {
        const freelancer = freelancers.find(
          (f: any) => f.emailUser.email === email
        );

        if (freelancer && freelancer.passworde === password) {
          localStorage.setItem('userId', freelancer.id);
          localStorage.setItem('userRole', 'FREELANCER');
          alert('Bienvenido, freelancer');
          this.router.navigate(['/forum']);
          return;
        }

        this.startupService.getAllStartups().subscribe({
          next: (startups) => {
            const startup = startups.find(
              (s: any) => s.emailUser.email === email
            );

            if (startup && startup.passworde === password) {
              localStorage.setItem('userId', startup.id);
              localStorage.setItem('userRole', 'STARTUP');
              alert('Bienvenido, startup');
              this.router.navigate(['/forum']);
            } else {
              alert('Credenciales incorrectas');
            }
          },
          error: () => alert('Error al consultar startups'),
        });
      },
      error: () => alert('Error al consultar freelancers'),
    });
  }
}
