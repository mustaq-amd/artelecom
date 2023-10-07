import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-by-email',
  templateUrl: './login-by-email.component.html',
  styleUrls: ['./login-by-email.component.css'],
})
export class LoginByEmailComponent {
  loginEmailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginEmailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginEmailForm.valid) {
      // Handle form submission here
      console.log(this.loginEmailForm.value);
    }
  }
}
