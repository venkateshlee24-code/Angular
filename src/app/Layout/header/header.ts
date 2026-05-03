import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MaterialModule } from '../../shared/material/material-module';
import { AuthService } from '../../shared/services/auth.service';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true, // ✅ important
  imports: [MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() menuClick = new EventEmitter<void>();
  userMenuOpen = false;
  themeMenuOpen = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private theme: ThemeService
  ) {}

  toggleMenu() {
    this.menuClick.emit();
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    this.themeMenuOpen = false; // close other dropdown
  }

  toggleThemeMenu() {
    this.themeMenuOpen = !this.themeMenuOpen;
    this.userMenuOpen = false; // close other dropdown
  }

  closeAllMenus() {
    this.userMenuOpen = false;
    this.themeMenuOpen = false;
  }

  goToProfile() {
    this.closeAllMenus();
    this.router.navigate(['/profile']);
  }

  changeTheme(themeName: string) {
    this.theme.setTheme(themeName);
    this.closeAllMenus();
  }

  logout() {
    this.closeAllMenus();
    this.auth.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => console.error('Logout error', err)
    });
  }
}
