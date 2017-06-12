import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'

@Component({
    selector : 'session-list',
    templateUrl : 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string 
    filteredSessions: ISession[] = []

    ngOnChanges()
    {
        if(this.sessions){
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter)
    {
        console.log(filter);
        if(filter === 'all')
        {
            this.filteredSessions = this.sessions.slice(0)
        }else{
            this.filteredSessions = this.sessions.filter(sessions => {
               return sessions.level.toLocaleLowerCase() === filter;
            })
        }    
    }
}

