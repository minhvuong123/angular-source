import { Component, signal} from '@angular/core';
import { CustomSlider } from '../custom-slider/custom-slider.component';

@Component({
  selector: 'media-control',
  templateUrl: './media-control.component.html',
  imports: [CustomSlider]
})
export class MediaControl {
  volume = signal(0);

  clickAndSeeVolume(): void {
    console.log(this.volume);
  }
}
