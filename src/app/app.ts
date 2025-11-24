import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from '../user-profile/user-profile.component';
import { MediaControl } from '../media-control/media-control.component';
import { CustomCard } from '../custom-card/custom-card.component';
import { CardTitle } from "../custom-card/card-title/card-title.component";
import { CardBody } from "../custom-card/card-body/card-body.component";
import { ProfilePhoto } from "../profile-photo/profile-photo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, MediaControl, CustomCard, CardTitle, CardBody, ProfilePhoto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-source');
}
