import { Component } from '@angular/core';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-experiencia-page',
  standalone: true,
  imports: [NavbarComponent, ExperienciaComponent, FooterComponent],
  templateUrl: './experiencia-page.component.html',
  styleUrl: './experiencia-page.component.css'
})
export class ExperienciaPageComponent {

}
