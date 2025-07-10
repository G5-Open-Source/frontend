import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { ProjectResource } from '../models/project-resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);
  private baseUrl =
    environments.restApiBaseUrl + environments.projectEndpointPath;

  createProjects(startup: ProjectResource): Observable<any> {
    return this.http.post(`${this.baseUrl}`, startup);
  }
  getAllProjects(): Observable<ProjectResource[]> {
    return this.http.get<ProjectResource[]>(`${this.baseUrl}`);
  }
}
