import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { navLinks, socialLinks } from '../../../data/navigation.data';

@Component({
  selector: 'coffeeroasters-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  navLinks = navLinks;
  socialLinks = socialLinks;
}
