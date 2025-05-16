import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingPageComponent } from './landing-page/presentation/landing-page/landing-page.component';
import { TheProjectsPageComponent } from './projects/presentation/the-projects.page/the-projects.page.component';
import { MainForumComponent } from './components-forum/forum/main-forum/main-forum.component';
import { SubForumComponent } from './components-forum/forum/sub-forum/sub-forum.component';
import { ProjectInfoComponent } from './components-forum/project-info/project-info.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: TheProjectsPageComponent,
      },
      {
        path: 'forum',
        component: MainForumComponent,
      },
      {
        path: 'forum/:id',
        component: SubForumComponent,
      },
      {
        path: 'project/:id',
        component: ProjectInfoComponent,
      }
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];
