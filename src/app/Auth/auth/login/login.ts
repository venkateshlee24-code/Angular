import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';
import { Router } from '@angular/router';

import { MaterialModule } from '../../../shared/material/material-module';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  form!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    // ✅ Create Reactive Form
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  submit(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.auth.login(this.form.value).subscribe({
      next: (res) => {

        // ✅ Save BOTH tokens
      this.auth.saveTokens(res);


        // ✅ Navigate after login
        this.router.navigate(['/dashboard']);

      },
      error: () => {

        alert('Invalid email or password');

        this.loading = false;
      }
    });

  }

}
