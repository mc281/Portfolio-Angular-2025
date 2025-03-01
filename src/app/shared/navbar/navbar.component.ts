import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, NgxTypedJsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  estado: boolean = false;

  type = false;
  type1 = false;
  type2 = false;
  type3 = false;
  type4 = false;
  type5 = false;

  toggleMenu() {
    this.estado = !this.estado;
  }

  hover(num: number) {
    this.type1 = false;
    this.type2 = false;
    this.type3 = false;
    this.type4 = false;
    this.type5 = false;

    switch (num) {
      case 1:
        this.type1 = true;
        break;
      case 2:
        this.type2 = true;
        break;
      case 3:
        this.type3 = true;
        break;
      case 4:
        this.type4 = true;
        break;
      case 5:
        this.type5 = true;
        break;
    }
  }

}

