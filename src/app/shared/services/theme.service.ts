import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  initTheme() {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem('erp-theme') || 'azure-blue';
    this.setTheme(savedTheme);
  }

  setTheme(themeName: string) {
    if (!this.isBrowser) return;

    document.body.className = '';
    document.body.classList.add(`${themeName}-theme`);

    localStorage.setItem('erp-theme', themeName);
  }
}
