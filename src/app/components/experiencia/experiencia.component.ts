import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { ExperienciaService } from '../../service/experiencia.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css',
})
export class ExperienciaComponent {

  listaExperiencia: Experiencia[] = [
    {
      "id": "1",
      "titulo": "Desarrollo Web de una Landing Page para una PyME de Sushi",
      "empresa": "MDP Programa",
      "fecha": "Diciembre 2023 - Febrero 2024",
      "descripcion": "Diseño y desarrollo grupal de una landing page profesional para una PyME especializada en la elaboración y comercialización de sushi. La página está optimizada para promover los productos, resaltar la calidad y atraer nuevos clientes",
      "habilidad1": "JavaScript",
      "habilidad2": "HTML5",
      "habilidad3": "CSS3",
      "habilidad4": "NodeJS"
    },
    {
      "id": "2",
      "titulo": "Desarrollo en C# Gestión de un gimnasio",
      "empresa": "IFTS",
      "fecha": "Agosto 2023 - Noviembre 2023",
      "descripcion": "Desarrollo grupal de una aplicación en C# para gestionar usuarios afiliados y no afiliados en un gimnasio, permitiendo registrar, modificar y consultar datos de usuarios. Implementación de clases para la gestión de afiliación, incluyendo atributos como fecha de registro y tipo de plan, y funcionalidades como conversión de usuarios y búsqueda avanzada. Almacenamiento de usuarios e información de cobro en base de datos MySQL",
      "habilidad1": "C#",
      "habilidad2": ".NET",
      "habilidad3": "MySQL",
      "habilidad4": "UML"
    },
    {
      "id": "3",
      "titulo": "Desarrollo de aplicación de Android Gestión de un gimnasio",
      "empresa": "IFTS",
      "fecha": "Marzo 2024 - Julio 2024",
      "descripcion": "Desarrollo colaborativo de una aplicación móvil en Kotlin para la gestión de usuarios afiliados y no afiliados en un gimnasio, con funcionalidades para registrar, modificar y consultar datos de los usuarios. Implementación de una interfaz de usuario intuitiva y moderna diseñada en Figma.",
      "habilidad1": "Figma",
      "habilidad2": "Android Studio",
      "habilidad3": "Kotlin",
      "habilidad4": ""
    },
    {
      "id": "4",
      "titulo": "Full-Stack Aplicación Web de Comercio",
      "empresa": "IFTS",
      "fecha": "Agosto 2024 - Noviembre 2024",
      "descripcion": "Desarrollo grupal de una aplicación web full-stack para un comercio, implementando tanto el frontend como el backend. Utilización de MongoDB para almacenamiento de datos y aseguramiento de la funcionalidad mediante pruebas con Jest y Supertest. La aplicación permite gestionar productos, usuarios y transacciones de manera eficiente y escalable, con un enfoque en la calidad del código mediante pruebas automatizadas.",
      "habilidad1": "JavaScript",
      "habilidad2": "Postman",
      "habilidad3": "NodeJS",
      "habilidad4": "MongoDB"
    }
  ]
  ngOnInit(): void {
    /*this.experienciaService.getExperiencia().subscribe(
      {
        next: (experiencia: Experiencia[]) => {
          this.listaExperiencia = experiencia;
        }
      }
    )*/
  }

  experienciaService = inject(ExperienciaService);

  //listaExperiencia: Experiencia[] = [];
}
