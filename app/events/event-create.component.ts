import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/event.service'

@Component({
    templateUrl : 'app/events/event-create.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px; }
        .error input { background-color:#E3C3C5; }
        .error ::-webkit-input-placeholder { color : #999; }
        .error ::-moz-placeholder { color : #999; }
        .error :-moz-placeholder { color : #999; }
        .error :ms-input-placeholder { color : #999; }
    `]
}) //    selector : 'events-list',

export class EventCreateComponent {
    isDirty: boolean = true;

    constructor(private router:Router, private eventSvc: EventService){}

    saveEvent(formValues)
    {
        console.log(formValues);
        this.eventSvc.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}