import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TheProjectsPageComponent } from './projects/presentation/the-projects.page/the-projects.page.component';
import { LandingPageComponent } from './landing-page/presentation/landing-page/landing-page.component';
@Component({
  selector: 'app-root',
  imports: [TheProjectsPageComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'becode-frontend';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
