import { AfterViewInit, Component, contentChild } from '@angular/core';
import { CardTitle } from './card-title/card-title.component';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  imports: []
})
export class CustomCard implements AfterViewInit {
  text = 'Custom Card title';
  protected cardTitle = contentChild(CardTitle);

  ngAfterViewInit(): void {
    console.log('Custom card', this.cardTitle());
  }
}
