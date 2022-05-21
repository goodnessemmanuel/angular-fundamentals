import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  public events: any[] = [];  

  constructor(private eventService: EventService) {}
  
  ngOnInit(): void {
      this.events = this.eventService.getEvents();
  }
}
