import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private project: Project = {
    id: 'project1',
    name: 'Nombre del proyecto',
    items: [
      'Miembros',
      'Actividades recientes',
      'Recursos agregados'
    ]
  };

  getProject(): Observable<Project> {
    return of(this.project);
  }
}
