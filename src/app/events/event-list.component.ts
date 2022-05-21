import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styles: [
    `
      .padding-left {
        margin-left: 10px;
      }
      .well div {
        padding: 20px;
        color: white;
        background: red;
      }
    `,
  ],
})
export class EventListComponent {
  public event1 = {
    id: 1,
    name: 'Angular Connect',
    price: 569,
    date: '10/09/1988',
    imageURL: '/assets/images/basic-shield.png',
    location: {
      address: 'Kingston Layout',
      city: 'Las Vegas',
      country: 'USA',
    },
  };
}
