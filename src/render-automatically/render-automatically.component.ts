import { Component } from '@angular/core';
import { UserAdmin } from './user-admin/user-admin.component';
import { UserNormal } from './user-normal/user-normal.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'render-automatically',
  imports: [NgComponentOutlet],
  templateUrl: './render-automatically.component.html'
})
export class RenderAutomatically {
  
  getUserComponent() {
    return true ? UserAdmin : UserNormal;
  }
}
