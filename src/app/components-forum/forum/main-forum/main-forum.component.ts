import { Component, OnInit } from '@angular/core';
import { Forum } from '../../../models/forum.model';
import { ForumService } from '../../../services-forum/forum.service';

@Component({
  selector: 'app-main-forum',
  standalone: true,
  imports: [],
  templateUrl: './main-forum.component.html',
  styleUrls: ['./main-forum.component.css']
})
export class MainForumComponent implements OnInit {
  mainForum: Forum = {
    id: '',
    name: 'Foro Principal',
    type: 'main',
    order: 0
  };

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getMainForum().subscribe(forum => {
      this.mainForum = forum;
    });
  }

  navigateToForum(): void {
    console.log(`Navegando al foro: ${this.mainForum.name}`);
  }
}
