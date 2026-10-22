import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { navLinks } from '../../../data/navigation.data';

@Component({
  selector: 'coffeeroasters-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navLinks = navLinks;
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((value) => !value);
  }
}
