import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FreelancerService } from '../application/freelancer.service';
import { CreateFreelancerResource } from '../models/create-freelancer-resource';

@Component({
  standalone: true,
  selector: 'app-freelancer-form',
  templateUrl: './freelancer-form.component.html',
  styleUrls: ['./freelancer-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FreelancerFormComponent implements OnInit {
  freelancerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private freelancerService: FreelancerService
  ) {}

  ngOnInit(): void {
    this.freelancerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      profession: ['', Validators.required],
      workingStatus: ['AVAILABLE', Validators.required],
      payment: [0, [Validators.required, Validators.min(0)]],
      studyCertificates: this.fb.array([this.createCertificateFormGroup()]),
    });
  }

  // Crea un nuevo grupo de certificado de estudio
  private createCertificateFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: [''],
      adquisitionDate: [new Date().toISOString()],
    });
  }

  // Getter para acceder fácilmente al array
  get studyCertificates(): FormArray {
    return this.freelancerForm.get('studyCertificates') as FormArray;
  }

  addCertificate(): void {
    this.studyCertificates.push(this.createCertificateFormGroup());
  }

  removeCertificate(index: number): void {
    this.studyCertificates.removeAt(index);
  }

  submitForm(): void {
    if (this.freelancerForm.invalid) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const form = this.freelancerForm.value;

    const payload: CreateFreelancerResource = {
      firstname: form.firstname,
      lastName: form.lastName,
      email: form.email,
      dni: form.dni,
      password: form.password,
      age: form.age,
      userRole: 'FREELANCER',
      profession: form.profession,
      workingStatus: form.workingStatus,
      averagePayPerHour: {
        payment: form.payment,
      },
      studyCertificates: form.studyCertificates,
    };

    this.freelancerService.createFreelancer(payload).subscribe({
      next: () => {
        alert('¡Registro exitoso!');
        this.router.navigate(['/forum']);
      },
      error: (err) => {
        console.error(err);
        alert('Error: ' + (err.error?.message || 'Error desconocido'));
      },
    });
  }

  goToHomePage(): void {
    this.router.navigate(['/forum']);
  }
}
