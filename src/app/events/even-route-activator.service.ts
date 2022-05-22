import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivatorService implements CanActivate{
    constructor(private eventService: EventService, private router: Router){}

    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //notice '!!' casts to a boolean 
       const doesEventUrlExists  = !!this.eventService.getEvent(route.params['id']);
        if(!doesEventUrlExists)
            this.router.navigate(['/404']);
            
       return doesEventUrlExists;
    }

}