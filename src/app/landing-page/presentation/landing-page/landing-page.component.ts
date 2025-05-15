import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../../shared/presentation/language-switcher.component/language-switcher.component.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    LanguageSwitcherComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  formData = {
    nombre: '',
    correo: '',
    idea: '',
  };

  ngOnInit() {
    this.setupModal();
  }

  private setupModal() {
    const modal = document.getElementById('formModal');
    const openBtn = document.getElementById('abrirModal');
    const closeBtn = document.querySelector('.close');

    if (modal && openBtn && closeBtn) {
      openBtn.onclick = () => {
        modal.style.display = 'block';
      };

      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }
  }

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    const modal = document.getElementById('formModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  explorarFreelancers() {
    console.log('Explorando freelancers');
  }

  publicarIdea() {
    console.log('Publicando idea');
  }

  verPerfil(nombre: string) {
    console.log(`Viendo perfil de ${nombre}`);
  }

  freelancers = [
    {
      nombre: 'Diego Seijas',
      descripcion: 'Diseñadora UX/UI, programador Web',
      imagen:
        'https://egt.com.co/wp-content/uploads/2023/07/06-07-Banner-web-1600x600-1-1024x384.png',
    },
    {
      nombre: 'Andrés Gómez',
      descripcion: 'Desarrollador Full Stack',
      imagen:
        'https://girolabs.com/wp-content/uploads/2022/01/pexels-olia-danilevich-4974915.jpg',
    },
  ];
}
