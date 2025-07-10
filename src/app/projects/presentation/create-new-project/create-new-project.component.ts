import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../application/project.service';

@Component({
  selector: 'app-create-new-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-new-project.component.html',
  styleUrl: './create-new-project.component.css',
})
export class CreateNewProjectComponent implements OnInit {
  projectForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.projectForm.invalid) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const projectPayload = this.projectForm.value;

    this.projectService.createProjects(projectPayload).subscribe({
      next: () => {
        alert('¡Proyecto creado exitosamente!');
        this.router.navigate(['/projects']);
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear proyecto: ' + err.message);
      },
    });
  }
  goToProjects() {
    this.router.navigate(['/projects']);
  }
}
