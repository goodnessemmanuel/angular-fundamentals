import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { ToasterService } from './common/toaster.service';
import { Error404Component } from './errors/404.component';

import { EventAppComponent } from './event-app.component';
import { EventRouteActivatorService } from './events/even-route-activator.service';
import { CreateEventComponent } from './events/event-create.component';
import { EventDetailComponent } from './events/event-detail.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToasterService,
    EventRouteActivatorService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
