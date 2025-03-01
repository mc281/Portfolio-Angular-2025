import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  }
  ,
  {
    path: 'experiencia',
    loadComponent: () => import('./pages/experiencia-page/experiencia-page.component').then(m => m.ExperienciaPageComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-page/projects-page.component').then(m => m.ProjectsPageComponent)
  },
  {
    path: 'habilidades',
    loadComponent: () => import('./pages/habilidades-page/habilidades-page.component').then(m => m.HabilidadesPageComponent)
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
