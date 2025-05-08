import { Component } from '@angular/core';
import { ProjectsCardsComponent } from '../projects-cards/projects-cards.component';
import { TheHeaderComponent } from '../../../shared/presentation/the-header.component/the-header.component.component';

@Component({
  selector: 'app-the-projects',
  standalone: true,
  imports: [ProjectsCardsComponent, TheHeaderComponent],
  templateUrl: './the-projects.page.component.html',
  styleUrl: './the-projects.page.component.css'
})
export class TheProjectsPageComponent {
}
