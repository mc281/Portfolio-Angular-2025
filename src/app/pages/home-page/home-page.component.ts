import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ExperienciaComponent } from "../../components/experiencia/experiencia.component";
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, ProjectsComponent, ExperienciaComponent, HabilidadesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent { }
