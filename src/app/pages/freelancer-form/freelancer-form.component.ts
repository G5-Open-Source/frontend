import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-freelancer-form',
  templateUrl: './freelancer-form.component.html',
  styleUrls: ['./freelancer-form.component.css']

})
export class FreelancerFormComponent implements OnInit {
  freelancerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.freelancerForm = this.fb.group({
      projectId: ['', Validators.required],
      invitationCode: ['']
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.freelancerForm.valid) {
      console.log('Datos del formulario de freelancer:', this.freelancerForm.value);

    } else {

      Object.keys(this.freelancerForm.controls).forEach(key => {
        this.freelancerForm.get(key)?.markAsTouched();
      });
    }
  }

  goToHomePage() {
    this.router.navigate(['/select']);
  }
}
