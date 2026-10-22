import { Component } from '@angular/core';
import { ImageTextSectionData } from '../../../../shared/interfaces/image-text-section.interface';


@Component({
  selector: 'coffeeroasters-uncompromising-quality',
  imports: [],
  templateUrl: './uncompromising-quality.component.html',
  styleUrl: './uncompromising-quality.component.css',
})
export class UncompromisingQualityComponent {
  quality: ImageTextSectionData = {
    title: 'Uncompromising quality',
    description:
      'Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.',
    image: {
      mobile: 'assets/about/mobile/image-quality.jpg',
      tablet: 'assets/about/tablet/image-quality.jpg',
      desktop: 'assets/about/desktop/image-quality.jpg',
      alt: 'Coffee cup on a wooden table',
    },
  };

}
