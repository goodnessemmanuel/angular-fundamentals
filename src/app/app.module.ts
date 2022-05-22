import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToasterService } from './common/toaster.service';

import { EventAppComponent } from './event-app.component';
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
    EventDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToasterService],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
