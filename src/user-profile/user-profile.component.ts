import { Component, computed, effect, inject, Injector, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';
import { form, Field, required, email } from '@angular/forms/signals';

interface ILogin {
  email: string;
  password: string;
  gender: string;
  country: string;
}

@Component({
  selector: 'user-profile',
  imports: [Field],
  templateUrl: './user-profile.component.html'
})
export class UserProfile {
  protected firstName = signal('kiwi');
  protected loginModel = signal<ILogin>({ email: '', password: '', gender: '', country: '' });
  protected loginForm = form(this.loginModel, (schemaModel) => {
    required(schemaModel.email, { message: 'Email is required' });
    email(schemaModel.email, { message: 'Please enter a valid email address' });

    required(schemaModel.password, { message: 'password is required' });
  });

  protected count: WritableSignal<number> = signal(0);
  protected finalCount: Signal<Number> = computed(() => this.count() + 1);

  protected shippingOptions: any = signal(['Ground', 'Air', 'Sea']);
  protected selectedOption: any = signal(this.shippingOptions()[0]);
  // protected selectedOption: any = linkedSignal(() => this.shippingOptions()[0]);

  constructor() {
    effect(() => {
      // console.log("effect in constructor: ", this.firstName())
    })
    this.initializeLogging();

    // open line 30 to see the issue
    // console.log("row 30 signal 1: ", this.selectedOption()); // 'Ground'
    this.selectedOption.set('Sea');
    // console.log("row 30 signal 2: ", this.selectedOption()); // 'Sea'
    this.shippingOptions.set(['Email', 'Will Call', 'Postal service']);
    // console.log("row 30 signal 3: ", this.selectedOption()); // 'Email'
  }
  
  newnew() {
    // console.log('asidouad');
  }

  updateName(): void {
    this.firstName.set('name updated');
    this.name.set(['setItem', 'setItem1']);
    setTimeout(() => {
      this.firstName.update(name => name.toUpperCase());
    }, 3000)
  }

  private injector = inject(Injector);
  initializeLogging(): void {
    effect(() => {
      // console.log(`The count is: ${this.count()}`);
    }, {injector: this.injector});
  }

  // signal equality function
  protected name = signal<string[]>(['kiwi'], { equal: this.isEqual })
  isEqual(originValues: string[], newValues: string[]) {
    let equal = true;
    newValues.forEach((newValue, index) => {
      if (newValue !== originValues[index]) {
        equal = false;
        return;
      }
    })

    return equal;
  }
}
