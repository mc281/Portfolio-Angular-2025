import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Skills } from '../interfaces/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  http = inject(HttpClient)

  urlSkills = environment.urlSkills;

  //Obtener los proyectos
  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.urlSkills);
  }
}
