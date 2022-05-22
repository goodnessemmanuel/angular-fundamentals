import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-detail.component.html',
  styles: [`
      .container { padding: 0 20px }
      .event-image { height: 100px }
    `,
  ],
})

export class EventDetailComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }
  
}
