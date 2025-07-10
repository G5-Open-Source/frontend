import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { Observable } from 'rxjs';
import { CreateStartupResource } from '../models/create-startup-resource';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  private http = inject(HttpClient);
  private baseUrl =
    environments.restApiBaseUrl + environments.userStartupEndpointPath;

  createStartup(startup: CreateStartupResource): Observable<any> {
    return this.http.post(`${this.baseUrl}`, startup);
  }
  getAllStartups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
