import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventsResolver implements Resolve<any>{

    constructor(private eventSvc:EventService){}

    resolve(route: ActivatedRouteSnapshot){
        //return this.eventSvc.getEvents().map(events => events);
        return this.eventSvc.getEvent(route.params['id']);
        
    }
}