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

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getSubForums().subscribe(forums => {
      this.subForums = forums;
    });
  }

  navigateToSubforum(forum: Forum): void {
    console.log(`Navegando al subforo: ${forum.name}`);
  }
}
