import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { ToasterService } from './common/toaster.service';
import { Error404Component } from './errors/404.component';
import { EventAppComponent } from './event-app.component';
import { NavComponent } from './nav/nav.component';

import {
  EventRouteActivatorService,
  CreateEventComponent,
  EventDetailComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventService,
} from './events/index';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    EventService,
    ToasterService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: confirmAction,
    },
  ],
  bootstrap: [EventAppComponent],
})
export class AppModule {}

function confirmAction(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not save this event, do you really want to cancel?'
    );
  }
  return true;
}
