/**
 * The angular Routes import helps with
 * Typescript definition for router config that provides some extra
 * intellisense and angular compile time safety
 */
import { Routes } from '@angular/router';
import { CreateEventComponent } from './app/events/event-create.component';

import { EventDetailComponent } from './app/events/event-detail.component';
import { EventListComponent } from './app/events/event-list.component';

/**
 * All route config to the entire events app is done here
 * pathMatch with value full means:
 * - redirect if the URL full matches the specified path string
 * pathMatch with value prefix means:
 * - redirect if the URL starts with the specified path
 */
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
