import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
  ],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'exam-managment-system-ui';

  constructor() {

  }


}
