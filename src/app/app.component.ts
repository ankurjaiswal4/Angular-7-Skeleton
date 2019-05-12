import { Component } from '@angular/core';
import { AuthService } from './core/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';

  showHeader: Boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.showHeader = true;
    }
  }
}
