import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Project } from '../interfaces/project.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  http = inject(HttpClient)

  urlProjects = environment.urlProjects;

  //Obtener los proyectos
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.urlProjects);
  }

}
