import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageTextSectionData } from '../../interfaces/image-text-section.interface';

@Component({
  selector: 'coffeeroasters-image-text-section',
  standalone: true,
  templateUrl: './image-text-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageTextSectionComponent {
  section = input.required<ImageTextSectionData>();
  imagePosition = input<'left' | 'right'>('left');
}
