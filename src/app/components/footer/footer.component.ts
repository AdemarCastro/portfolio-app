import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}
  
  ngOnInit() {
    this.themeService.darkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}