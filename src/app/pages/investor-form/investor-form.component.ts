import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-investor-form',
  templateUrl: './investor-form.component.html',
  styleUrls: ['./investor-form.component.css']
})
export class InvestorFormComponent implements OnInit {
  investorForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.investorForm = this.fb.group({
      projectName: ['', Validators.required],
      invitationCode: [''],
      department: [''],
      province: [''],
      district: [''],
      subforo1: [''],
      subforo2: [''],
      subforo3: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.investorForm.valid) {
      console.log('Datos del formulario de inversionista:', this.investorForm.value);
      // Aquí podrías enviar los datos a un servicio
    } else {
      Object.keys(this.investorForm.controls).forEach(key => {
        this.investorForm.get(key)?.markAsTouched();
      });
    }
  }

  goToHomePage() {
    this.router.navigate(['/select']);
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log('Archivo seleccionado:', file);

    }
  }
}
