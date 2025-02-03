import { Injectable } from '@angular/core';
import { Job, Company } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

  createJob(job: Job): Observable<Job> {
    const data = {
      data: job
    };
    return this.http.post<Job>(`${this.apiUrl}/jobs`, data);
  }

  getCompanies(): Observable<{ data: Company[] }> {
    return this.http.get<{ data: Company[] }>(`${this.apiUrl}/companies`);
  }
}
