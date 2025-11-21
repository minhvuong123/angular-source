import { Component, computed, input} from '@angular/core';

@Component({
  selector: 'custom-slider',
  templateUrl: './custom-slider.component.html'
})
export class CustomSlider {
  value = input(0);

  label = computed(() => `this label computed with value ${this.value()}`)
}
