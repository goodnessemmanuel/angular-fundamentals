import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

/**
 * Notice the following about this component:
 * - it is not a child component
 * - it has no selector
 * Hence it can only be accessed using routing
 */
@Component({
  templateUrl: './event-detail.component.html',
  styles: [
    `
      .container {
        padding: 0 20px;
      }
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(this.routes.snapshot.params['id']);
  }
}
