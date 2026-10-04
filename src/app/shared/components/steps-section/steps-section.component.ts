import { Component, input } from '@angular/core';
import { HowItWorksStep } from '../../interfaces/how-it-works-step.interface';
import { StepCardComponent } from './step-card/step-card.component';

@Component({
  selector: 'coffeeroasters-steps-section',
  standalone: true,
  imports: [StepCardComponent],
  templateUrl: './steps-section.component.html',
  styleUrl: './steps-section.component.css',
  host: {
    '[attr.data-theme]': 'variant()',
  },
})
export class StepsSectionComponent {
  step = input<HowItWorksStep[]>();

  variant = input<'primary' | 'secondary'>('secondary');
}
