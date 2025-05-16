import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  selector: 'selectuser',
  templateUrl: './select-user-type.component.html',
  styleUrls: ['./select-user-type.component.css']
})
export class selectusertype {
  constructor(private router: Router) { console.log("hola"); }

  goToFreelancerForm() {
    this.router.navigate(['/freelance']);
  }

  goToInvestorForm() {
    this.router.navigate(['/investor']);
  }
}
