import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Experience } from '../interfaces/experience.interface';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {
  http = inject(HttpClient)

  urlExperience = environment.urlExperience;

  //Obtener los proyectos
  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.urlExperience);
  }
}
