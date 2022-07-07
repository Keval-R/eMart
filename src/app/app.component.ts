import { Component } from '@angular/core';
import {
  NavigationError,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';
import { AuthService } from './service/auth/auth.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  
  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoggedIn = this.authService.isLoggedIn;
      }

      if (event instanceof NavigationError) {
        this.isLoggedIn = this.authService.isLoggedIn;
      }
    });
    let title = environment.title;
    console.log("title",title)
  }

  isLoggedIn: string = this.authService.isLoggedIn;
}
