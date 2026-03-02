import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {

  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    this.show(message, 'success-snackbar');
  }

  error(message: string) {
    this.show(message, 'error-snackbar');
  }

  info(message: string) {
    this.show(message, 'info-snackbar');
  }

  warn(message: string) {
    this.show(message, 'warn-snackbar');
  }

  private show(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [panelClass]
    });
  }
}
