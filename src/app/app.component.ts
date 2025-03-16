import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="themeClass">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit{
  title = 'portfolio-app';

  themeClass = 'light-theme';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkTheme$.subscribe(isDark => {
      this.themeClass = isDark ? 'dark-theme' : 'light-theme';
      this.applyTheme();
    });
  }

  applyTheme() {
    const body = document.body;
    if (this.themeClass === 'dark-theme') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}