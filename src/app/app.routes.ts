import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@soccer-angle/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@soccer-angle/orders').then((m) => m.OrdersComponent),
  },
];
