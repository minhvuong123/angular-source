import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit, signal, viewChildren } from '@angular/core';
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
import { TranslationService } from './services/translation.service';
import { DependencyInject } from "../dependency-inject/dependency-inject.component";
import { MyLib } from '@mylib/lib/my-lib'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, MediaControl, CustomCard, CardTitle, CardBody, ProfilePhoto, LifeCycle, RenderAutomatically, FormData, DependencyInject, MyLib],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewChecked, AfterContentChecked, AfterViewInit, OnInit {
  protected readonly title = signal('angular-source');
  protected value1 = signal(0);
  protected value2 = signal(0);
  protected actions = viewChildren(CustomCard);
  protected cardTitle = viewChildren(CardTitle);

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations('vn');
  }

  changeValue1() {
    this.value1.set(2);
  }

  changeValue2() {
    this.value2.set(2);
  }

  changeLanguage(event: any) {
    console.log(event);
    this.translationService.loadTranslations(event.srcElement.value);
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
