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
import { CreateStartupResource } from '../models/create-startup-resource';

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
        description: ['', Validators.required], // lo accedes como form.description.description
      }),
      approach: this.fb.group({
        approach: ['', Validators.required], // lo accedes como form.approach.approach
      }),
      hiringStatus: ['ACTIVELY_HIRING', Validators.required],
      workers: this.fb.group({
        workersAmmount: [1, [Validators.required, Validators.min(1)]], // lo accedes como form.workers.workersAmmount
      }),
    });
  }

  submitForm(): void {
    if (this.startupForm.invalid) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const form = this.startupForm.value;

    const payload: CreateStartupResource = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      dni: form.dni,
      password: form.password,
      age: String(form.age),
      userRole: 'STARTUP',
      profession: form.profession,
      StartupName: form.StartupName,
      description: { Description: form.description.description },
      approach: { Approach: form.approach.approach },
      hiringStatus: form.hiringStatus,
      workers: { WorkersAmmount: form.workers.workersAmmount },
    };

    console.log('📦 Payload enviado:', payload);

    this.startupService.createStartup(payload).subscribe({
      next: () => {
        alert('✅ Startup registrada correctamente');
        this.router.navigate(['/forum']);
      },
      error: (err) => {
        console.error(err);
        alert(
          '❌ Error al registrar la startup: ' +
            (err.error?.message ?? 'Error desconocido')
        );
      },
    });
  }

  goToHomePage(): void {
    this.router.navigate(['/forum']);
  }
}
