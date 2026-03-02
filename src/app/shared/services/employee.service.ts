import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private api = environment.apiUrl + '/api/v1/employees';

  constructor(private http: HttpClient) {}

  getEmployees(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }
  
}
