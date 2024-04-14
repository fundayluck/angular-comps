import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { AppComponent } from './app.component';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'elements', component: ElementsHomeComponent },
  { path: 'collections', component: CollectionsHomeComponent },
];
