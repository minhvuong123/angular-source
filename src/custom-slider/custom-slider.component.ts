import { Component, computed, input, model} from '@angular/core';

@Component({
  selector: 'custom-slider',
  templateUrl: './custom-slider.component.html'
})
export class CustomSlider {
  value = input(0);
  requiredValue = input.required<number>();
  transformValue = input('', { transform: this.trimString, alias: 'otherName' })

  label = computed(() => `this label computed with value ${this.value()}`)

  // model -> old ngModel
  modelValue = model(0);

  trimString(value: string | undefined): string {
    return value?.trim() || '';
  }

  increaseModelValue(): void {
    this.modelValue.update(oldValue => oldValue + 1);
  }
}
