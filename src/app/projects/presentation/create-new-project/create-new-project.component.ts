import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../application/project.service';

@Component({
  selector: 'app-create-new-project',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
    console.log('🛠️ ngOnInit ejecutado - Inicializando formulario');
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
    });
  }

  submitForm(): void {
    console.log('✅ submitForm fue llamado');

    if (this.projectForm.invalid) {
      console.warn('⚠️ El formulario es inválido:', this.projectForm.errors);
      console.table(this.projectForm.value);
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const projectPayload = this.projectForm.value;
    console.log('📦 Payload del proyecto a enviar:', projectPayload);

    this.projectService.createProjects(projectPayload).subscribe({
      next: () => {
        console.log('✅ Proyecto creado correctamente');
        alert('¡Proyecto creado exitosamente!');
        this.router.navigate(['/projects']);
      },
      error: (err) => {
        console.error('❌ Error al crear proyecto:', err);
        alert(
          'Error al crear proyecto: ' + (err.message || 'Error desconocido')
        );
      },
    });
  }

  goToProjects() {
    console.log('↩️ Redirigiendo a /projects');
    this.router.navigate(['/projects']);
  }
}
