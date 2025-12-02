import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';

interface LoginData {
  email: string
  password: string
}

@Component({
  selector: 'signal-form',
  imports: [Field],
  templateUrl: './signal-form.component.html'
})
export class SignalForm {
  loginModel = signal<LoginData>({
    email: '',
    password: ''
  })
  loginForm = form(this.loginModel)
}
