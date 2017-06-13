import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { EventService } from '../events/shared/event.service'
import { ISession } from '../events/shared/event.model'

@Component({
    selector : 'nav-bar',
    templateUrl : 'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav { font-size:15px;}
        #searchForm {margin-right:100px;}
        @media (max-width:1200px){#searchForm {display :none}}
    `]
})
export class NavBarComponent{
    searchTerm: string = '';
    foundedSessions: ISession[];

    constructor(private auth: AuthService, private eventSvr: EventService) {}

    searchSession(searchTerm){
        this.eventSvr.searchSession(searchTerm).subscribe(sessions => {
            this.foundedSessions = sessions;
            console.log(this.foundedSessions);
        });
    }
}