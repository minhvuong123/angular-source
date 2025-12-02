import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, signal, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from '../user-profile/user-profile.component';
import { MediaControl } from '../media-control/media-control.component';
import { CustomCard } from '../custom-card/custom-card.component';
import { CardTitle } from "../custom-card/card-title/card-title.component";
import { CardBody } from "../custom-card/card-body/card-body.component";
import { ProfilePhoto } from "../profile-photo/profile-photo.component";
import { LifeCycle } from "../life-cycle/life-cycle.component";
import { RenderAutomatically } from "../render-automatically/render-automatically.component";
import { FormData } from "../form-data/form-data.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, MediaControl, CustomCard, CardTitle, CardBody, ProfilePhoto, LifeCycle, RenderAutomatically, FormData],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewChecked, AfterContentChecked, AfterViewInit {
  protected readonly title = signal('angular-source');
  protected value1 = signal(0);
  protected value2 = signal(0);
  protected actions = viewChildren(CustomCard);
  protected cardTitle = viewChildren(CardTitle);

  changeValue1() {
    this.value1.set(2);
  }

  changeValue2() {
    this.value2.set(2);
  }

  ngAfterContentChecked(): void {
    console.log('App --> ' + "ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log('App --> Custom card', this.actions());
    console.log('App --> Card title', this.cardTitle());
  }

  ngAfterViewChecked(): void {
    console.log('App --> ' + "ngAfterViewChecked");
  }
}
