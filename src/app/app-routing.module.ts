import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedjobComponent } from './appliedjob/appliedjob.component';
import { CreatejobportalComponent } from './createjobportal/createjobportal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobapplypotalComponent } from './jobapplypotal/jobapplypotal.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'createjobportal', component: CreatejobportalComponent},
  { path: 'jobapplyportal', component: JobapplypotalComponent},
  { path: 'appliedjob', component: AppliedjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
