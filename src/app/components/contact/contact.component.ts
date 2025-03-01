import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})

export class ContactComponent {
  formulario: FormGroup;  // Definimos la variable para el formulario reactivo
  formStatus: string | null = null;  // Para mostrar mensajes de estado

  constructor(private http: HttpClient) {
    // Definir el formulario con sus validaciones
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

  enviarEmail() {
    if (this.formulario.valid) {
      const formData = new FormData();
      formData.append('nombre', this.formulario.value.nombre);
      formData.append('email', this.formulario.value.email);
      formData.append('asunto', this.formulario.value.asunto);
      formData.append('mensaje', this.formulario.value.mensaje);

      // Formspree
      const formspreeUrl = 'https://formspree.io/f/xeoqpwdw';

      this.http.post(formspreeUrl, formData).subscribe(
        (response) => {
          this.formStatus = '¡Mensaje enviado!';
          this.formulario.reset();
        },
        (error) => {
          this.formStatus = 'Hubo un error. Por favor, intentar de nuevo.';
        }
      );
    } else {
      this.formStatus = 'Por favor, completa todos los campos.';
    }
  }
}

