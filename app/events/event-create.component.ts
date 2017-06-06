import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template : `
    <div>
        <h1>New Event</h1>
        <hr />
        <h2>Events Create Form</h2>
        <button class='btn btn-primary'>Save</button>
        <button class='btn btn-default' (click)="cancel()">Cancel</button>
    </div>
    `
}) //    selector : 'events-list',

export class EventCreateComponent {
    isDirty: boolean = true;

    constructor(private router:Router){}

    cancel() {
        this.router.navigate(['/events'])
    }
}