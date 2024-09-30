import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Importaj auth service
import { Router } from '@angular/router'; // Za preusmjeravanje nakon prijave

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // Ubrizgaj auth servis
    private router: Router  // Ubrizgaj Router za preusmjeravanje
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Poziv metode za prijavu
  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login({ email, password }).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Preusmjeri korisnika nakon uspješne prijave
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }
}
