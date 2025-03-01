import { Component } from '@angular/core';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-habilidades-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HabilidadesComponent],
  templateUrl: './habilidades-page.component.html',
  styleUrl: './habilidades-page.component.css'
})
export class HabilidadesPageComponent {

}
