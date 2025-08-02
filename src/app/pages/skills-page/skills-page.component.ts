import { Component } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SkillsComponent],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {

}
