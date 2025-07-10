import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingPageComponent } from './landing-page/presentation/landing-page/landing-page.component';
import { TheProjectsPageComponent } from './projects/presentation/the-projects.page/the-projects.page.component';
import { ForumPagesComponent } from './components-forum/forum-pages/forum-pages.component';
import { ForumDetalleComponent } from './chat/forum-detalle/forum-detalle.component';
import { selectusertype } from './pages/select-user-type/select-user-type.component';
import { InvestorFormComponent } from './pages/investor-form/investor-form.component';
import { FreelancerFormComponent } from './pages/freelancer-form/freelancer-form.component';
import { CreateNewProjectComponent } from './projects/presentation/create-new-project/create-new-project.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [],
  },
  { path: 'projects', component: TheProjectsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forum', component: ForumPagesComponent },
  { path: 'foro', component: ForumDetalleComponent },
  { path: 'select', component: selectusertype },
  { path: 'freelance', component: FreelancerFormComponent },
  { path: 'investor', component: InvestorFormComponent },
  { path: 'create-project', component: CreateNewProjectComponent },
  { path: '**', redirectTo: '' },
];
