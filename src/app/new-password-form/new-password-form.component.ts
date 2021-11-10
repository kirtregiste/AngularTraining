import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css']
})
export class NewPasswordFormComponent {

  form: any
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      old: fb.control('', Validators.required, PasswordValidators.shouldMatch),
      new: fb.control('', Validators.required),
      confirm: fb.control('', [Validators.required, PasswordValidators.newConfirmShouldMatch])
    })
   }

   get oldPassword() { return this.form.get('old');}
   get newPassword() { return this.form.get('new');}
   get confirmPassword() { return this.form.get('confirm');}

   Submit() {

   }
}
