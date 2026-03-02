import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginSummary {
  userId: number;
  userName: string;
  totalLogins: number;
  totalMinutesLoggedIn: number;
  lastLoginUtc: string;
}

@Injectable({ providedIn: 'root' })
export class LoginSummaryService {

  private apiUrl = '/api/v1/admin/login-summary';

  constructor(private http: HttpClient) {}

  getLoginSummary(): Observable<LoginSummary[]> {
    return this.http.get<LoginSummary[]>(`http://localhost:8017/api/v1/admin/login-summary`);
  }
}
