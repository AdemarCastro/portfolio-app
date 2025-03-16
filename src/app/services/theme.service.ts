import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSubject = new BehaviorSubject<boolean>(true);
  darkTheme$ = this.darkThemeSubject.asObservable();

  toggleTheme() {
    this.darkThemeSubject.next(!this.darkThemeSubject.value);
  }
}
