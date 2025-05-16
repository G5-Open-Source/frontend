import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum-input.component.html',
  styleUrls: ['./forum-input.component.css']
})
export class ForumInputComponent {
  mensaje: string = '';

  @Output() mensajeEnviado = new EventEmitter<{
    tipo: 'texto' | 'imagen' | 'audio';
    contenido: string;
  }>();

  enviarTexto(): void {
    const texto = this.mensaje.trim();
    if (texto) {
      this.mensajeEnviado.emit({ tipo: 'texto', contenido: texto });
      this.mensaje = '';
    }
  }

  onArchivoSeleccionado(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const archivo = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result as string;
      const tipo = archivo.type.startsWith('image') ? 'imagen' :
                   archivo.type.startsWith('audio') ? 'audio' : 'texto';

      this.mensajeEnviado.emit({ tipo, contenido: base64 });
    };

    reader.readAsDataURL(archivo);
  }
}
