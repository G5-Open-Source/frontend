import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services-forum/project.service';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  project: Project = {
    id: '',
    name: '',
    items: []
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProject().subscribe(project => {
      this.project = project;
    });
  }
}
