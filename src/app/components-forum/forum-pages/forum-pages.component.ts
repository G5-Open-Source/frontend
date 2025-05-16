import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainForumComponent } from '../forum/main-forum/main-forum.component';
import { SubForumComponent } from '../forum/sub-forum/sub-forum.component';
import { ProjectInfoComponent } from '../project-info/project-info.component';

@Component({
  selector: 'app-forum-pages',
  standalone: true,
  imports: [
    HeaderComponent,
    MainForumComponent,
    SubForumComponent,
    ProjectInfoComponent
  ],
  templateUrl: './forum-pages.component.html',
  styleUrl: './forum-pages.component.css'
})
export class ForumPagesComponent {
}
