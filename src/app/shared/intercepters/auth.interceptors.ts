import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;   // 🔐 lock

  constructor(
    private tokenService: TokenService,
    private auth: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.tokenService.getAccessToken();

    console.group('🔐 AuthInterceptor');
    console.log('➡ Request:', req.url);
    console.log('📦 Current Access Token:', token);

    let authReq = req;

    // ✅ Attach token
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('✅ Token attached');
    } else {
      console.warn('⚠ No token found');
    }

    console.groupEnd();

    return next.handle(authReq).pipe(

      catchError((error: HttpErrorResponse) => {

        if (error.status === 401 && !this.isRefreshing) {

          this.isRefreshing = true;

          console.group('♻️ Refresh Flow');
          console.warn('⛔ 401 detected → refreshing token');

          return this.auth.refreshToken().pipe(

            switchMap((res) => {

              console.log('🆕 New Access Token:', res.accessToken);
              console.log('🆕 New Refresh Token:', res.refreshToken);

              this.auth.saveTokens(res);

              this.isRefreshing = false;

              const retryReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.accessToken}`
                }
              });

              console.log('🔁 Retrying original request');
              console.groupEnd();

              return next.handle(retryReq);
            }),

            catchError(() => {

              console.error('❌ Refresh failed → Logout');
              console.groupEnd();

              this.isRefreshing = false;
              this.auth.logout();

              return throwError(() => new Error('Session expired'));
            })

          );
        }

        return throwError(() => error);
      })
    );
  }
}
