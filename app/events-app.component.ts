import { Component, OnInit } from '@angular/core'
import { AuthService } from './user/auth.service'

@Component({
    selector : 'events-app',
    template : `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
}) // <events-list></events-list>
export class EventsAppComponent implements OnInit
{
    constructor(private authSvc: AuthService){}

    ngOnInit(){
        this.authSvc.checkAuthStatus();
    }
}