import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ForumService, Subforo } from '../forum-services/forum-service.service';

@Component({
  selector: 'app-forum-resumen',
  standalone: true,
  imports: [
    CommonModule,  
    RouterModule   
  ],
  templateUrl: './forum-resume.component.html',
  styleUrls: ['./forum-resume.component.css']
})
export class ForumResumeComponent implements OnInit {
  subforos: Subforo[] = [];

  constructor(private forumService: ForumService, private router: Router) {}

  ngOnInit(): void {
    this.subforos = this.forumService.getSubforos();
  }

  irADetalle(id: number): void {
    this.router.navigate(['/foro', id]);
  }
}
