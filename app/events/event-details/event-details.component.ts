import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EventService } from '../shared/event.service'
import { IEvent, ISession } from '../shared/index'

@Component({
    selector : 'event-details',
    templateUrl : 'app/events/event-details/event-details.Component.html',
    styles : [`
        .container { padding-left:20px; padding-right:20px}
        .event-image { height:100px}
    `]
})

export class EventDetailsComponent implements OnInit{
    event: IEvent
    addSession: Boolean = false;
    filterBy: string = 'all'

    constructor(private eventSvc: EventService, 
                private router: ActivatedRoute){
    }

    ngOnInit() {
        this.event = this.eventSvc.getEvent(
            +this.router.snapshot.params['id']);
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventSvc.updateEvent(this.event);
        this.addSession = false;
    }

    cancelAddSession(){
        this.addSession = false;
    }
}