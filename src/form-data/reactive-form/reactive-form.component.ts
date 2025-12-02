import { Component, inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, FormSubmittedEvent, ReactiveFormsModule, StatusChangeEvent, ValidatorFn, Validators, ValueChangeEvent } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html'
})
export class ReactiveForm {
  email = new FormControl('');
  password = new FormControl('', {
    validators: [Validators.required, this.asyncCustomValidator(), this.customValidator()],
    updateOn: 'blur'
  });

  userForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  private formbuilder = inject(FormBuilder);

  userFormBuilder = this.formbuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor() {
    this.userFormBuilder.events.subscribe((e) => {
      if (e instanceof ValueChangeEvent) {
        console.log('Value changed to: ', e.value);
      }
      if (e instanceof StatusChangeEvent) {
        console.log('Status changed to: ', e.status);
      }
      // if (e instanceof PristineChangeEvent) {
      //   console.log('Pristine status changed to: ', e.pristine);
      // }
      // if (e instanceof TouchedChangeEvent) {
      //   console.log('Touched status changed to: ', e.touched);
      // }
      // if (e instanceof FormResetEvent) {
      //   console.log('Form was reset');
      // }
      if (e instanceof FormSubmittedEvent) {
        console.log('Form was submitted');
      }
    })
  }

  onSubmit() {
    console.log(this.userForm)
  }

  blurAction(event: any) {
    console.log(event)
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationError | null => {
      return null;
    }
  }

  asyncCustomValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationError | null> => {
      return of(null).pipe(delay(500));
    }
  }
}
