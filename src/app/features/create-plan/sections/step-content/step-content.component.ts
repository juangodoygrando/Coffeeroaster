import { Component, inject, input } from '@angular/core';
import { CoffeePlanService } from '../../../../services/coffee-plan.service';
import { WizardService } from '../../../../services/wizard.service';
import { Stepper, OrderState } from '../../../../shared/interfaces/steppers.interface';

@Component({
  selector: 'coffeeroasters-step-content',
  imports: [],
  templateUrl: './step-content.component.html',
  styleUrl: './step-content.component.css',
})
export class StepContentComponent {
  stepForContent = input<Stepper[]>();

  coffeePlanService = inject(CoffeePlanService);
  wizardService = inject(WizardService);

  selectedId(step: keyof OrderState, optionId: number) {
    this.coffeePlanService.set(step, optionId);
  }
  onToggle(step: string, event: Event) {
    const details = event.target as HTMLDetailsElement;
    if (details.open) {
      this.wizardService.lastOpenedStep.set(step);
    }
  }
}
