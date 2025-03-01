import { Component } from '@angular/core';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsComponent, NavbarComponent, FooterComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {

}
