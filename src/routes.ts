/**
 * The angular Routes import helps with
 * Typescript definition for router config that provides some extra
 * intellisense and angular compile time safety
 */
import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import { EventRouteActivatorService } from './app/events/event-details/event-route-activator.service';
import { CreateEventComponent } from './app/events/event-create.component';

import { EventDetailComponent } from './app/events/event-details/event-detail.component';
import { EventListComponent } from './app/events/event-list.component';
import { EventListResolver } from './app/events';

/**
 * All route config to the entire events app is done here
 * pathMatch with value full means:
 * - redirect if the URL full matches the specified path string
 * pathMatch with value prefix means:
 * - redirect if the URL starts with the specified path
 */
export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventListComponent,
    /**
     * intercept this route, 
     * get the entire data first 
     * to prevent page from laoding without real time data, 
     * map the data to events key as object 
     * and store it in the route before loading
     */
    resolve: { events: EventListResolver }, 
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  {
    path: 'user',
    loadChildren: () =>
      import('./app/user/user.module').then((m) => m.UserMondule), //dynamic import since recent angular version. loadchildren nolonger takes a string but a function,
  },
];
