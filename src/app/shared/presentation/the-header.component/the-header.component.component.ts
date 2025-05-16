import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher.component/language-switcher.component.component'
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-the-header',
  standalone: true,
  imports: [TranslateModule, LanguageSwitcherComponent, MatButtonModule],
  templateUrl: './the-header.component.component.html',
  styleUrl: './the-header.component.component.css'
})
export class TheHeaderComponent {
  constructor(private router: Router) {}

  navigateToForum() {
    this.router.navigate(['/forum']);
  }
}
