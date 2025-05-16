import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private forumService: ForumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forumService.getMainForum().subscribe(forum => {
      this.mainForum = forum;
    });
  }

  navigateToForo(): void {
    this.router.navigate(['/foro']);
  }
}
