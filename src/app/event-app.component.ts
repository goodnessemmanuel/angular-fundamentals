import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
  <nav-component></nav-component>
  <event-list></event-list>
   `,
})
export class EventAppComponent {
  title = 'ng-fundamentals';
}
