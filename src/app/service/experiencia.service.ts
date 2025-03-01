import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Experiencia } from '../interfaces/experiencia.interface';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  http = inject(HttpClient)

  urlExperiencia = environment.urlExperiencia;

  //Obtener los proyectos
  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.urlExperiencia);
  }
}
