import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements-routing.module').then(
        (m) => m.ElementsRoutingModule
      ),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections-routing.module').then(
        (m) => m.CollectionsRoutingModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];
