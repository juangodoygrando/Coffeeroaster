import { NavLink, SocialLink } from '../shared/interfaces/navigation.interface';

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/home' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Create Your Plan', path: '/create-plan' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: '/assets/shared/desktop/icon-facebook.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: '/assets/shared/desktop/icon-twitter.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: '/assets/shared/desktop/icon-instagram.svg',
  },
];
