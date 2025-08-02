import { Component, OnInit } from '@angular/core';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Paquete ligero

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [],
  templateUrl: './particles-background.component.html',
  styleUrl: './particles-background.component.css'
})

export class ParticlesBackgroundComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    await loadSlim(tsParticles);

    // New syntax - pass options as single object with container and options
    await tsParticles.load({
      id: "tsparticles", // Container ID

      options: {         // Configuration
        particles: {
          number: { value: 50 },
          color: { value: "#fff" },
          shape: { type: "circle" },
          opacity: { value: 2 },
          size: { value: 2 },
          links: { enable: true, distance: 150, color: "#45e77b" },
          move: { enable: true, speed: 1 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }
          }
        }
      }
    });
  }
}
