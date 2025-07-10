import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FreelancerService } from '../application/freelancer.service';
import { StartupService } from '../application/startup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private freelancerService: FreelancerService,
    private startupService: StartupService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const { email, password } = this.loginForm.value;

    // Buscar en freelancers
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

        // Si no es freelancer, buscar en startups
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
