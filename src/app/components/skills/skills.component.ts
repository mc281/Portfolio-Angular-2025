import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { Skills } from '../../interfaces/skills.interface';
import { SkillsService } from '../../service/skills.service';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SkillsComponent {

  skillsService = inject(SkillsService);

  skills = [
    { id: 1, title: 'GitHub', img: 'https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF', size: '100' },
    { id: 2, title: 'Postman', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', size: '100' },
    { id: 3, title: 'PhotoShop', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', size: '100' },
    { id: 4, title: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', size: '100' },
    { id: 5, title: 'Blender', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg', size: '100' },
    { id: 6, title: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', size: '100' },
    { id: 7, title: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', size: '100' },
    { id: 8, title: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', size: '100' },
    { id: 9, title: 'C#', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', size: '200' },
    { id: 10, title: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', size: '100' },
    { id: 11, title: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', size: '100' },
    { id: 12, title: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', size: '100' },
    { id: 13, title: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', size: '80' }
  ];


  ngAfterViewInit() {
    new Swiper('.swiper', {
      modules: [Autoplay],
      virtual: {
        enabled: true
      },
      effect: 'slides',
      spaceBetween: 15,
      slidesPerView: 'auto',

      breakpoints: {
        768: { // tablet
          slidesPerView: 8,
          spaceBetween: 15
        },
        576: { // mobile-sm
          slidesPerView: 6
        },
        320: { // mobile
          slidesPerView: 4
        }
      },
      loopAdditionalSlides: 2, // Slides adicionales para loop suave
      // Número de slides clonados para el loop
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true
    });
  }


  ngOnInit(): void {
    // If you want to use the service later, uncomment this
    /*
    this.skillsService.getHabilidades().subscribe({
      next: (habilidad: Skills[]) => {
        this.listaHabilidades = habilidad;
      },
      error: (err) => {
        console.error('Error loading skills:', err);
      }
    });
    */
  }

}
