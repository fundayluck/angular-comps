import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewsHomeComponent } from './views-home/views-home.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsHomeComponent,
    // children: [
    //   { path: '', component: BiographyComponent },
    //   { path: 'companies', component: CompaniesComponent },
    //   { path: 'partners', component: PartnersComponent },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
