import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  show: boolean = false;

  constructor(private router: Router) {}

  showButtons() {
    this.show = true;
  }

  navigateToDessert() {
    // Navigate to the dessert page
    this.router.navigate(['/cookies']);
  }

  navigateToLocal() {
    // Navigate to the local page
    this.router.navigate(['/ketupat']);
  }

  navigateToPopular() {
    // Navigate to the popular page
    this.router.navigate(['/turkey']);
  }
}
