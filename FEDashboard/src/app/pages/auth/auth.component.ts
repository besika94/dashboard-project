import { Component, signal, computed, model, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  formState = signal<'Login' | 'Register'>('Login');
  username = model<string>('');
  password = model<string>('');
  welcomeMessage = computed(() =>
    this.formState() === 'Login' ? 'back!' : 'newComer!'
  );
  confirmPassword = model<string>('');
  email = model<string>('');
  private router = inject(Router);

  onAuthModeChange(mode: 'Login' | 'Register', form: NgForm) {
    this.formState.set(mode);
    form.reset();
  }
  onSubmit(form: NgForm) {
    console.log('Form submitted: ', form.value);
    form.reset();
    this.router.navigate(['/dashboard']);
  }
}
