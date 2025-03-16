import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatToolbarModule, MatIcon, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
