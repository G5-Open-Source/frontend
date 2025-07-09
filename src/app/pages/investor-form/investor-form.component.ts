import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartupService } from '../application/startup.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-investor-form',
  templateUrl: './investor-form.component.html',
  styleUrls: ['./investor-form.component.css'],
})
export class InvestorFormComponent implements OnInit {
  startupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private startupService: StartupService
  ) {}

  ngOnInit(): void {
    this.startupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      profession: ['', Validators.required],
      StartupName: ['', Validators.required],
      description: this.fb.group({
        description: ['', Validators.required],
      }),
      approach: this.fb.group({
        approach: ['', Validators.required],
      }),
      hiringStatus: ['ACTIVELY_HIRING', Validators.required],
      workers: this.fb.group({
        workersAmmount: [1, [Validators.required, Validators.min(1)]],
      }),
    });
  }

  submitForm(): void {
    if (this.startupForm.invalid) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const payload = {
      ...this.startupForm.value,
      userRole: 'STARTUP' as const,
    };

    this.startupService.createStartup(payload).subscribe({
      next: () => {
        alert('✅ Startup registrada correctamente');
        this.router.navigate(['/forum']);
      },
      error: (err) => {
        console.error(err);
        alert('❌ Error al registrar la startup: ' + err.error.message);
      },
    });
  }

  goToHomePage(): void {
    this.router.navigate(['/forum']);
  }
}
