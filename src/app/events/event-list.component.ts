import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '../common/toaster.service';

@Component({
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  public events: any = [];

  constructor(
    private toaster: ToasterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /**
     * Instead of using events service directly, use the resolver to
     * get events list completely as it will be stored in the route first
     * for this list component page to load uniformly
     */
    this.events = this.route.snapshot.data['events'];
  }

  public handleThumbnailClick(eventName: string) {
    //alert("Event " + eventName)
    this.toaster.success(eventName, 'HardCoded Title');
  }
}
