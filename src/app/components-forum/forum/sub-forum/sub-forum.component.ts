import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Forum } from '../../../models/forum.model';
import { ForumService } from '../../../services-forum/forum.service';

@Component({
  selector: 'app-sub-forum',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sub-forum.component.html',
  styleUrls: ['./sub-forum.component.css']
})
export class SubForumComponent implements OnInit {
  subForums: Forum[] = [];

  constructor(private forumService: ForumService, private router: Router) {}

  ngOnInit(): void {
    this.forumService.getSubForums().subscribe(forums => {
      this.subForums = forums;
    });
  }

  navigateToSubforum(forum: any) {
    this.router.navigate(['/foro']);
  }
}
