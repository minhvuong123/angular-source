import { Component, inject } from '@angular/core';
import { UserService } from '@src/app/services/user.service';

@Component({
  selector: 'lib-my-lib',
  imports: [],
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: ``,
})
export class MyLib {
  userService = inject(UserService)

  constructor() {
    console.log(this.userService)
  }
}
