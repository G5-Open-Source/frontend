import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ForumInputComponent } from '../forum-input/forum-input.component';
import { ForumMessageComponent } from '../forum-message/forum-message.component';
import { ForumService, Mensaje } from '../forum-services/forum-service.service';

@Component({
  selector: 'app-forum-detalle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ForumInputComponent,
    ForumMessageComponent
  ],
  templateUrl: './forum-detalle.component.html',
  styleUrls: ['./forum-detalle.component.css']
})
export class ForumDetalleComponent implements OnInit {
  mensajes: Mensaje[] = [];
  subforoId!: number;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subforoId = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.cargarMensajes();
    this.forumService.getMensajesObservable().subscribe(mensajes => {
      this.mensajes = mensajes;
    });
  }

  enviarMensaje(data: { tipo: 'texto' | 'imagen' | 'audio'; contenido: string }): void {
    const nuevoMensaje: Mensaje = {
      id: 0,
      autor: 'Tú',
      contenido: data.contenido,
      tipo: data.tipo,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.forumService.enviarMensaje(nuevoMensaje);
  }

  volver(): void {
    this.router.navigate(['/forum']);
  }
}
