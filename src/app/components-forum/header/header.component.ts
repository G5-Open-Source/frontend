import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navItems: string[] = ['Projects', 'Foro', 'Invitaciones', 'Notificaciones'];
  activeItem = 'Foro';
  user = {
    username: 'Adriana',
    role: 'Moderador',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/3532/3532704.png',
  };

  constructor(private router: Router) { }

  setActiveItem(item: string) {
    this.activeItem = item;
    if (item === 'Projects') {  // Assuming 'Projects' is one of your navItems
      this.router.navigate(['/projects']);
    }
  }
}
