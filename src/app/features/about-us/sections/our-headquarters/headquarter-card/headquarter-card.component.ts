import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Headquarter } from '../../../../../shared/interfaces/headquarter.interface';

@Component({
  selector: 'coffeeroasters-headquarter-card',
  standalone: true,
  templateUrl: './headquarter-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadquarterCardComponent {
  headquarter = input.required<Headquarter>();
}
