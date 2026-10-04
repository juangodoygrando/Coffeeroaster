import { Component } from '@angular/core';
import { HowItWorksStep } from '../../../../shared/interfaces/how-it-works-step.interface';
import { StepperComponent } from '../../sections/stepper/stepper.component';
import { steps } from '../../../../data/how-it-works.data';
import { StepsSectionComponent } from '../../../../shared/components/steps-section/steps-section.component';
import { HeroData } from '../../../../shared/interfaces/hero.interface';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';

@Component({
  selector: 'coffeeroasters-create-plan-page',
  imports: [StepperComponent, StepsSectionComponent, HeroSectionComponent],
  templateUrl: './create-plan-page.component.html',
  styleUrl: './create-plan-page.component.css',
})
export class CreatePlanPageComponent {
  stepArray: HowItWorksStep[] = steps;

  heroCreatePlan: HeroData = {
    title: 'Create a plan',
    description:
      'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.',
    image: '/assets/plan/mobile/image-hero-blackcup.jpg',
    className: 'createPlan',
  };
}
