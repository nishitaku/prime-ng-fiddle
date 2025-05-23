import { Routes } from '@angular/router';
import { ConfirmationStepPageComponent } from './pages/confirmation-step-page/confirmation-step-page.component';
import { PersonalStepPageComponent } from './pages/personal-step-page/personal-step-page.component';
import { SeatStepPageComponent } from './pages/seat-step-page/seat-step-page.component';
import { StepsPageComponent } from './pages/steps-page/steps-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'steps',
    pathMatch: 'full',
  },
  {
    path: 'steps',
    component: StepsPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal',
        pathMatch: 'full',
      },
      {
        path: 'personal',
        component: PersonalStepPageComponent,
      },
      {
        path: 'seat',
        component: SeatStepPageComponent,
      },
      {
        path: 'payment',
        component: PersonalStepPageComponent,
      },
      {
        path: 'confirmation',
        component: ConfirmationStepPageComponent,
      },
    ],
  },
];
