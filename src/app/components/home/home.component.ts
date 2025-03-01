import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

import * as AOS from 'aos';

import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }


}
