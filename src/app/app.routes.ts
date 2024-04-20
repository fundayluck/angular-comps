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
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views-routing.module').then((m) => m.ViewsRoutingModule),
  },
  {
    path: 'mods',
    loadChildren: () =>
      import('./mods/mods-routing.module').then((m) => m.ModsRoutingModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];
