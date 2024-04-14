import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { AppComponent } from './app.component';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'elements', component: ElementsHomeComponent },
  { path: 'collections', component: CollectionsHomeComponent },
  { path: '**', component: NotFoundComponent },
];
