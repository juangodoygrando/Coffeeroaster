import { Component, input } from '@angular/core';
import { HowItWorksStep } from '../../../interfaces/how-it-works-step.interface';

@Component({
  selector: 'coffeeroasters-step-card',
  imports: [],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.css',
  host: {
    '[attr.data-theme]': 'variant()',
  },
})
export class StepCardComponent {
  stepItem = input<HowItWorksStep>();

  variant = input<'primary' | 'secondary'>('secondary');
}
