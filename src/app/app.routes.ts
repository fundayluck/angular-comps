import { Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    loadChildren: () =>
      import('./elements/elements-routing.module').then(
        (m) => m.ElementsRoutingModule
      ),
  },
  { path: 'collections', component: CollectionsHomeComponent },
  { path: '**', component: NotFoundComponent },
];
