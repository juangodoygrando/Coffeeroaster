import { Component } from '@angular/core';

@Component({
  selector: 'coffeeroasters-why-choose-us',
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styles: ``,
})
export class WhyChooseUsComponent {
  benefits = [
    {
      icon: 'assets/home/desktop/icon-coffee-bean.svg',
      title: 'Best quality',
      description:
        "Discover an endless variety of the world's best artisan coffee from each of our roasters.",
    },
    {
      icon: 'assets/home/desktop/icon-gift.svg',
      title: 'Exclusive benefits',
      description:
        'Special offers and swag when you subscribe, including 30% off your first shipment.',
    },
    {
      icon: 'assets/home/desktop/icon-truck.svg',
      title: 'Free shipping',
      description:
        'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    },
  ];
}
