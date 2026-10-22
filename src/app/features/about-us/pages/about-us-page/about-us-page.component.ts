import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import { HeroData } from '../../../../shared/interfaces/hero.interface';
import { OurCommitmentComponent } from "../../sections/our-commitment/our-commitment.component";
import { UncompromisingQualityComponent } from '../../sections/uncompromising-quality/uncompromising-quality.component';

@Component({
  selector: 'coffeeroasters-about-us-page',
  standalone: true,
  imports: [HeroSectionComponent, OurCommitmentComponent, UncompromisingQualityComponent],
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent {
  heroAboutUs: HeroData = {
    title: 'About Us',
    description:
      'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.',
    image: 'assets/about/desktop/image-hero-whitecup.jpg',
    className: 'aboutUs',
  };
}
