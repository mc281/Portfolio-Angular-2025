import { Component } from '@angular/core';
import { ContactComponent } from '../../../components/contact/contact.component';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent, NavbarComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent { }
