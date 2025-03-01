import { Component, OnInit, inject } from '@angular/core';
import { Habilidad } from '../../interfaces/habilidad.interface';
import { HabilidadesService } from '../../service/habilidades.service';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css',
})
export class HabilidadesComponent {

  listaHabilidades: Habilidad[] = [
    {
      "id": "1",
      "nombre": "HTML",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      "id": "2",
      "nombre": "CSS",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      "id": "3",
      "nombre": "JavaScript",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      "id": "4",
      "nombre": "TypeScript",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      "id": "5",
      "nombre": "C#",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
      "id": "6",
      "nombre": "Node.js",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      "id": "7",
      "nombre": "MySQL",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
      "id": "8",
      "nombre": "MongoDB",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
      "id": "9",
      "nombre": "Angular",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
    },
    {
      "id": "10",
      "nombre": "Blender",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
    },
    {
      "id": "11",
      "nombre": "Bootstrap",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
      "id": "12",
      "nombre": "Photoshop",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
    },
    {
      "id": "13",
      "nombre": "Postman",
      "icono": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    {
      "id": "14",
      "nombre": "GitHub",
      "icono": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
    }
  ]

  ngOnInit(): void {
    /*
        this.habilidadesService.getHabilidades().subscribe(
          {
            next: (habilidad: Habilidad[]) => {
              this.listaHabilidades = habilidad;
            }
          }
        )*/
  }

  habilidadesService = inject(HabilidadesService);

  //listaHabilidades: Habilidad[] = [];

}
