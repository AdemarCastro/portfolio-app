import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [CommonModule, MatIconModule],
})
export class ProjectCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() highlights: string[] = [];
  @Input() tags: string[] = [];
  @Input() links: { github: string; webApp: string } = {
    github: '',
    webApp: ''
  };

  redirectTo(linkType: 'github' | 'webApp') {
    window.open(this.links[linkType], '_blank');
  }
}
