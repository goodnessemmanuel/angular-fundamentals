import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventService } from './shared';

/**
 * This service helps to resolve wait time from server when fetching data.
 * use this service to wait until data is completely fetched from the source
 * before loading the related page
 */
@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
      /**
       * pipe into the data flow, collect them to a map while the stream is open
       * wait until there is no longer stream of data and return the map of events
       * as an observable instead of the usual subsription due to this is a resolver
       */
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
