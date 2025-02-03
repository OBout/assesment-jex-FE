import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobListComponent } from './components/jobs/job-list/job-list.component';
import { JobFormComponent } from './components/jobs/job-form/job-form.component';
import { CompanyListComponent } from './components/companies/company-list/company-list.component';
import { ThanksComponent } from './components/thanks/thanks.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'create-job', component: JobFormComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'thanks', component: ThanksComponent }
];
