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

  constructor(
    private auth: AuthService,
    private router: Router,
    private theme: ThemeService,
  ) {}

  toggleMenu() {
    this.menuClick.emit();
  }
  changeTheme(themeName: string) {
    this.theme.setTheme(themeName);
  }
  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['/login']);
  }
}
