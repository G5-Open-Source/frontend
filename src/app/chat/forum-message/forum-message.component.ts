import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.css']
})
export class ForumMessageComponent {
  @Input() autor!: string;
  @Input() hora!: string;
  @Input() tipo!: 'texto' | 'imagen' | 'audio';
  @Input() contenido!: string;
}
