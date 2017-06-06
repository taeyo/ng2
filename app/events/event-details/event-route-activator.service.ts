import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router'

import { EventService } from '../shared/event.service'


@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventSvc: EventService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot){
        console.log('canActivate executing.....');
        const exist = !!this.eventSvc.getEvent(+route.params["id"]);

        if(!exist)
            this.router.navigate(['/404']);

        return exist;    
    }
}