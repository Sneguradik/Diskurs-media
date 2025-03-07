import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllJobsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllJobsRoutingModule {}
