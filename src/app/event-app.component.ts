import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
    <nav-component></nav-component>
    <router-outlet></router-outlet>
  `,
})
export class EventAppComponent {
  title = 'ng-fundamentals';
}
