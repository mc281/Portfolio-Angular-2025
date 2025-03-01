import { Component, inject } from '@angular/core';
import { ProyectoService } from '../../service/proyecto.service';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})

export class ProjectsComponent {

  listaProyectos: Project[] = [
    {
      "id": "1",
      "titulo": "Encriptador de Texto",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS3",
      "tecnologia3": "NodeJS",
      "descripcion": "Aplicación Web del Proyecto ONE de Oracle+Alura LATAM desarrollada con tecnología HTML5, CSS3 y JavaScript, cuya función es encriptar y desencriptar un texto.",
      "imagen": "images/proyecto_alura.webp",
      "linkCode": "https://github.com/mc2282/Alura-Encriptador",
      "linkPreview": "mc2282.github.io/Alura-Encriptador/"
    },
    {
      "id": "2",
      "titulo": "Juego Blackjack",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS3",
      "tecnologia3": "Vite",
      "descripcion": "Desarrollo del juego clásico de Blackjack utilizando JavaScript, con jugabilidad interactiva y seguimiento de puntajes en tiempo real. Empleo de funciones modulares de JavaScript para gestionar diferentes aspectos del juego, incluyendo la creación del mazo, el reparto de cartas, el cálculo del valor de las cartas, la creación de HTML para las cartas y la lógica del turno del computador.",
      "imagen": "images/proyecto_blackjack.webp",
      "linkCode": "https://github.com/mc2282/JS-Blackjack",
      "linkPreview": "https://blackjack-js-vite-app.netlify.app/"
    },
    {
      "id": "3",
      "titulo": "Juego Piedra, Papel o Tijera",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS3",
      "tecnologia3": "HTML5",
      "descripcion": "Desarrollado con Javascript, CSS3 y HTML5.",
      "imagen": "images/proyecto_ppt.webp",
      "linkCode": "https://github.com/mc2282/JuegoPPT",
      "linkPreview": "https://mc2282.github.io/JuegoPPT/"
    },
    {
      "id": "4",
      "titulo": "Tareas List",
      "tecnologia1": "JavaScript",
      "tecnologia2": "NodeJS",
      "tecnologia3": "Angular",
      "descripcion": "Aplicación desarrollada con HTML5, CSS3, JavaScript y Angular que permite la gestion de tareas y el almacenamiento de las mismas, simulando una base de datos con un servidor json.",
      "imagen": "images/proyecto_tareas.webp",
      "linkCode": "https://github.com/mc2282/TareasList",
      "linkPreview": "tareas-list.vercel.app"
    },
    {
      "id": "5",
      "titulo": "Tic Tac Toe",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS",
      "tecnologia3": "HTML",
      "descripcion": "Juego de tic tac toe desarrollado con JavaScript.",
      "imagen": "images/proyecto_tictactoe.webp",
      "linkCode": "https://github.com/mc2282/TictactoeJS",
      "linkPreview": "https://mc2282.github.io/tictactoeJS/"
    },
    {
      "id": "6",
      "titulo": "El Ahorcado",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS",
      "tecnologia3": "HTML",
      "descripcion": "Juego del ahorcado desarrollado con JavaScript.",
      "imagen": "images/proyecto_ahorcado.webp",
      "linkCode": "https://github.com/mc2282/AhorcadoJS",
      "linkPreview": "mc2282.github.io/AhorcadoJS/"
    },
    {
      "id": "7",
      "titulo": "Gestor de videos AluraFlix",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS",
      "tecnologia3": "Angular",
      "descripcion": "Aplicación desarrollada con Angular que le permite al usuario crear, editar y eliminar videos de la plataforma.",
      "imagen": "images/proyecto_aluraFlix.webp",
      "linkCode": "https://github.com/mc2282/Challenge-AluraFlix",
      "linkPreview": "mc2282.github.io/Challenge-AluraFlix/"
    },
    {
      "id": "8",
      "titulo": "Gestor de productos",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS",
      "tecnologia3": "API",
      "descripcion": "Aplicación que le permite al usuario crear y eliminar productos de la plataforma, por medio de una API.",
      "imagen": "images/proyecto_aluraGeek.webp",
      "linkCode": "https://github.com/mc2282/AluraGeek",
      "linkPreview": "alura-geek-three-iota.vercel.app"
    }
  ]

  ngOnInit(): void {
    /*this.proyectoService.getProjects().subscribe(
      {
        next: (projects: Project[]) => {
          this.listaProyectos = projects
        }
      }
    )*/
  }

  proyectoService = inject(ProyectoService);

  //listaProyectos: Project[] = [];
}
