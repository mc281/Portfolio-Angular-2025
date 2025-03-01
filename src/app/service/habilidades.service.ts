import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Habilidad } from '../interfaces/habilidad.interface';


@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  http = inject(HttpClient)

  urlHabilidades = environment.urlHabilidades;

  //Obtener los proyectos
  getHabilidades(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.urlHabilidades);
  }
}
