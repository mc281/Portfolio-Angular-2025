import { Component } from '@angular/core';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [NavbarComponent, ExperienceComponent, FooterComponent],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent {

}
