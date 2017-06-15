import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

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
                private route: ActivatedRoute){
    }

    ngOnInit() {
        //Resolver를 적용하면 직접 서버 호출하지 않고 리졸버에게서 받아올 수 있음.
        // this.route.params.forEach( (params: Params) => {
        //     this.event = this.route.snapshot.data['event'];
        //     this.addSession = false;
        // });
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addSession = false;
        });

        // //이렇게 해야 observable 됨. 즉, id 매개변수 값이 바뀔때마다 동작함.
        // this.router.params.forEach( (params: Params) => {
 
        //    this.eventSvc.getEvent(+params['id']).subscribe((event: IEvent) => {
        //         this.event = event;
        //         this.addSession = false;
        //    });
        // //    this.event = this.eventSvc.getEvent(+params['id']);
        //    })
        //이건 스냅샷이라서 observable 안됨
        // this.event = this.eventSvc.getEvent(
        //     +this.router.snapshot.params['id']);
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