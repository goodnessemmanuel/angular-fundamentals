import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../common/toaster.service';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  public events: any[] = [];

  constructor(
    private eventService: EventService,
    private toaster: ToasterService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  public handleThumbnailClick(eventName: string) {
    //alert("Event " + eventName)
    this.toaster.success(eventName, "HardCoded Title");
  }
}
