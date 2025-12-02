import { Component } from '@angular/core';
import { SignalForm } from "./signal-form/signal-form.component";
import { ReactiveForm } from './reactive-form/reactive-form.component';


@Component({
  selector: 'form-data',
  imports: [SignalForm, ReactiveForm],
  templateUrl: './form-data.component.html'
})
export class FormData {

}
