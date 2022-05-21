import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `<event-list></event-list>
    <img src="../assets/images/basic-shield.png" /> `,
})
export class EventAppComponent {
  title = 'ng-fundamentals';
}
