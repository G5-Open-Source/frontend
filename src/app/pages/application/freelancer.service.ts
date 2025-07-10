import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { CreateFreelancerResource } from '../models/create-freelancer-resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  private http = inject(HttpClient);
  private baseUrl =
    environments.restApiBaseUrl + environments.userFreelancerEndpointPath;

  createFreelancer(freelancer: CreateFreelancerResource): Observable<any> {
    return this.http.post(`${this.baseUrl}`, freelancer);
  }
  getAllFreelancers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
