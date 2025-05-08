import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { SearchBarComponent } from '../../../search/presentation/search-bar/search-bar.component';

interface Project {
  id: number;
  image: string;
}

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
    SearchBarComponent
  ],
  templateUrl: './projects-cards.component.html',
  styleUrl: './projects-cards.component.css'
})
export class ProjectsCardsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      image: 'https://media.ambito.com/p/d52fc05c67c954f6efb9c510d1a3cca3/adjuntos/239/imagenes/040/455/0040455511/cita-tinderjpg.jpg'
    },
    {
      id: 2,
      image: 'https://images.ctfassets.net/63bmaubptoky/kpVp8pSRCLiGbSqQJeZ6pU3YNAC1sHJcm8UHEtotfB4/817df1ef22c32c63ccb14a6e7871e8b2/aplicaciones-medicas-ES-Capterra-header.png'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDmkf591s68vthOJnfmneTkP1_2hYpxfCRg&s'
    }
  ];

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  navigateToProject(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }

  pageSize = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  pageIndex = 0;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  get paginatedProjects(): Project[] {
    const startIndex = this.pageIndex * this.pageSize;
    return this.projects.slice(startIndex, startIndex + this.pageSize);
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  ngOnInit() {
    
  }
}
