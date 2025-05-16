import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Mensaje {
  id: number;
  autor: string;
  contenido: string;
  tipo: 'texto' | 'imagen' | 'audio';
  hora: string;
}

export interface Subforo {
  id: number;
  nombre: string;
}

@Injectable({ providedIn: 'root' })
export class ForumService {
  private mensajes: Mensaje[] = [
    {
      id: 1,
      autor: 'Kael',
      contenido: '¡Bienvenid@ al chat!',
      tipo: 'texto',
      hora: '08:00'
    }
  ];

  private mensajes$ = new BehaviorSubject<Mensaje[]>(this.mensajes);

  getMensajesObservable() {
    return this.mensajes$.asObservable();
  }

  cargarMensajes(): void {
    this.mensajes$.next(this.mensajes);
  }

  enviarMensaje(mensaje: Mensaje): void {
    mensaje.id = this.mensajes.length + 1;
    this.mensajes.push(mensaje);
    this.mensajes$.next(this.mensajes);
  }

  getSubforos(): Subforo[] {
    return [
      { id: 1, nombre: 'Subforo 1' },
      { id: 2, nombre: 'Subforo 2' },
      { id: 3, nombre: 'Subforo 3' }
    ];
  }
}
