import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    TranslateModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        opacity: 1
      })),
      state('out', style({
        height: '0px',
        opacity: 0
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class SearchBarComponent {
  searchQuery: string = '';
  showFilters: boolean = false;

  filters = [
    { name: 'search.filters.options.freelancer', checked: false },
    { name: 'search.filters.options.company', checked: false },
    { name: 'search.filters.options.recruiting', checked: false },
    { name: 'search.filters.options.cybersecurity', checked: false },
    { name: 'search.filters.options.aiml', checked: false },
    { name: 'search.filters.options.dataScience', checked: false },
    { name: 'search.filters.options.fullStack', checked: false },
    { name: 'search.filters.options.frontend', checked: false },
    { name: 'search.filters.options.backend', checked: false },
    { name: 'search.filters.options.operativeSystems', checked: false },
    { name: 'search.filters.options.webComm', checked: false }
  ];

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  onSearch() {
    const selectedFilters = this.filters
      .filter(filter => filter.checked)
      .map(filter => filter.name);
    console.log('Searching for:', this.searchQuery);
    console.log('Selected filters:', selectedFilters);
  }
}
