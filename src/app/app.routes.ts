import { Routes } from '@angular/router';
import { CreatePlanPageComponent } from './features/create-plan/pages/create-plan-page/create-plan-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { AboutUsPageComponent } from './features/about-us/pages/about-us-page/about-us-page.component';

export const routes: Routes = [
  {
    path: 'create-plan',
    component: CreatePlanPageComponent,
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
