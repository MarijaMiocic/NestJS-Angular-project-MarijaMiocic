import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Importaj auth service
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // Ubrizgaj auth servis
    private router: Router  // Ubrizgaj Router za preusmjeravanje
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required]]
    });
  }

  // Poziv metode za registraciju
  onRegister(): void {
    if (this.registerForm.valid) {
      const { email, password, username } = this.registerForm.value;

      this.authService.register({ email, password, username }).subscribe(
        (response) => {
          console.log('Registration successful', response);
          // Preusmjeri korisnika nakon uspješne registracije
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    }
  }
}
