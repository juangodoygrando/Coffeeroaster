import { Component } from '@angular/core';
import { OurCollectionComponent } from '../../sections/our-collection/our-collection.component';
import { WhyChooseUsComponent } from '../../sections/why-choose-us/why-choose-us.component';
import { steps } from '../../../../data/how-it-works.data';
import { HowItWorksStep } from '../../../../shared/interfaces/how-it-works-step.interface';
import { StepsSectionComponent } from '../../../../shared/components/steps-section/steps-section.component';

import { HeroData } from '../../../../shared/interfaces/hero.interface';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import { ButtonCreatePlanComponent } from "../../../../shared/components/button-create-plan/button-create-plan.component";

@Component({
  selector: 'coffeeroasters-home-page',
  imports: [
    OurCollectionComponent,
    WhyChooseUsComponent,
    StepsSectionComponent,
    HeroSectionComponent,
    ButtonCreatePlanComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  stepArray: HowItWorksStep[] = steps;

  heroHome: HeroData = {
    title: 'Great coffee made simple.',
    description:
      "Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    image: '/assets/home/mobile/image-hero-coffeepress.jpg',
    className: 'home',
    button: { label: 'Create your plan', link: '/create-plan' },
  };
}
