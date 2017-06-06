import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventsListResolver implements Resolve<any>{

    constructor(private eventSvc:EventService){}

    resolve(){
        return this.eventSvc.getEvents().map(events => events);
        
    }
}