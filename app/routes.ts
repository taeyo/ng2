import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventCreateComponent} from './events/event-create.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventsListResolver } from './events/events-list-resolver.service'

export const appRoutes = [
    { path : 'events/new', component : EventCreateComponent, canDeactivate:['canDeactivateCreateEvent'] },
    { path : 'events', component : EventsListComponent, 
        resolve : {
            events: EventsListResolver
        } 
    },
    { path : 'events/:id', component : EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path : '404', component: Error404Component },
    { path : '', redirectTo: '/events', pathMatch: 'full' }
]