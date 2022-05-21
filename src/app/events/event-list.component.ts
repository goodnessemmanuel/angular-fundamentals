import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

  //This tells typescript that this variable is in scope already 
  // and have been declared somewhere else
  declare let toastr: any; //it is available globally
  
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

  public handleThumbnailClick(eventName: string){
        //alert("Event " + eventName)
        //toastr.success(eventName);
        toastr.info(eventName)
  }
}
