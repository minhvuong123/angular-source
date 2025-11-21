import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from '../user-profile/user-profile.component';
import { MediaControl } from '../media-control/media-control.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, MediaControl],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-source');
}
