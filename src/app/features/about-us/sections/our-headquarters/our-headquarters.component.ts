import { ChangeDetectionStrategy, Component } from '@angular/core';
import { headquarters } from '../../../../data/headquarters.data';
import { Headquarter } from '../../../../shared/interfaces/headquarter.interface';
import { HeadquarterCardComponent } from './headquarter-card/headquarter-card.component';

@Component({
  selector: 'coffeeroasters-our-headquarters',
  standalone: true,
  imports: [HeadquarterCardComponent],
  templateUrl: './our-headquarters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurHeadquartersComponent {
  headquarters: Headquarter[] = headquarters;
}
