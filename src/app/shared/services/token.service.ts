import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  // ===== GETTERS =====
  isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp * 1000;
    return Date.now() > expiry;
  } catch {
    return true;
  }
}


  getAccessToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem('refresh_token');
  }

  // ===== SAVE =====

  saveTokens(accessToken: string, refreshToken: string) {
    if (!this.isBrowser()) return;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  // ===== REMOVE ONLY AUTH KEYS =====

  clear() {
    if (!this.isBrowser()) return;

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

}
