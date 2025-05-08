import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './language-switcher.component.component.html',
  styleUrl: './language-switcher.component.component.css'
})
export class LanguageSwitcherComponent {
  languages: { code: string, name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];
  currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  useLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
