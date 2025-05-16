import { Component } from '@angular/core';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems = ['Foro', 'Proyectos', 'Invitaciones', 'Notificaciones'];
  activeItem = 'Foro';
  user = {
    username: 'Adriana',
    role: 'Moderador',
    avatarUrl: 'assets/images/user-avatar.jpg'
  };

  setActiveItem(item: string): void {
    this.activeItem = item;
  }
}
