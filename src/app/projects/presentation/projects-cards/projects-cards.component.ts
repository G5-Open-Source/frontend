import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginatorModule,
  PageEvent,
  MatPaginator,
} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { SearchBarComponent } from '../../../search/presentation/search-bar/search-bar.component';
import { ProjectService } from '../../application/project.service';
import { ProjectResource } from '../../models/project-resource';

@Component({
  selector: 'app-projects-cards',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatRippleModule,
    SearchBarComponent,
  ],
  templateUrl: './projects-cards.component.html',
  styleUrl: './projects-cards.component.css',
})
export class ProjectsCardsComponent implements OnInit {
  projects: ProjectResource[] = [];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private projectService: ProjectService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error cargando proyectos', err),
    });
  }

  navigateToProject(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }

  pageSize = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  get paginatedProjects(): ProjectResource[] {
    const startIndex = this.pageIndex * this.pageSize;
    return this.projects.slice(startIndex, startIndex + this.pageSize);
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}
