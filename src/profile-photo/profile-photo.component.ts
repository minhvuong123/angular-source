import { Component, HostBinding, HostListener, signal} from '@angular/core';

@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  host: {
    'role': 'slider',
    // '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[style.background]' : `hasError() ? 'red' : 'green'`,
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  }
})
export class ProfilePhoto {
  @HostBinding('attr.aria-valuenow')
  value: number = 0;

  disabled: boolean = false;
  isActive = signal(false);
  hasError = signal(false);
  // updateValue(event: KeyboardEvent) { /* ... */ }
  @HostListener('keydown', ['$event'])
  updateValue(event: KeyboardEvent) {
    /* ... */
  }
}
