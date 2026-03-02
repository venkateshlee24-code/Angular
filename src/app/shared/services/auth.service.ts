import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private api = environment.apiUrl + '/api/v1/auth';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}

  // ================= LOGIN =================

  login(data: any): Observable<any> {
    return this.http.post(`${this.api}/login`, data);
  }

  saveTokens(res: any) {
    this.tokenService.saveTokens(
      res.accessToken,
      res.refreshToken
    );
  }

  // ================= REFRESH =================

  refreshToken(): Observable<any> {
    const refreshToken = this.tokenService.getRefreshToken();

    return this.http.post<any>(
      `${this.api}/refresh`,
      { refreshToken }
    );
  }

  // ================= LOGOUT =================

  logout(): Observable<any> {
    const refreshToken = this.tokenService.getRefreshToken();

    return this.http
      .post(`${this.api}/logout`, { refreshToken })
      .pipe(
        finalize(() => {
          this.tokenService.clear();
          this.router.navigate(['/login']);
        })
      );
  }

  // ================= PASSWORD =================

  changePassword(data: any): Observable<any> {
    return this.http.post(`${this.api}/change-password`, data);
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post(`${this.api}/reset-password`, data);
  }

  // ================= AUTH STATE =================

  isLoggedIn(): boolean {
    return !!this.tokenService.getAccessToken();
  }
}
