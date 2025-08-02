
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  }
  ,
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience-page/experience-page.component').then(m => m.ExperiencePageComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-page/projects-page.component').then(m => m.ProjectsPageComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills-page/skills-page.component').then(m => m.SkillsPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];
