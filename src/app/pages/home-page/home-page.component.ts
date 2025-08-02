import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { HomeComponent } from '../../components/home/home.component';
import { ContactComponent } from "../../components/contact/contact.component";
import { SkillsComponent } from '../../components/skills/skills.component';
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, ProjectsComponent, ExperienceComponent, SkillsComponent, HomeComponent, ContactComponent, AboutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {



}
