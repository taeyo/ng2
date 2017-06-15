import { Routes } from '@angular/router'

import {
    EventsListComponent,
    EventDetailsComponent,
    EventCreateComponent,
    // EventRouteActivator,
    EventsListResolver,
    CreateSessionComponent,
    EventsResolver
} from './events/index'
import { Error404Component } from './errors/404.component'

export const appRoutes = [
    { path : 'events/new', component : EventCreateComponent, canDeactivate:['canDeactivateCreateEvent'] },
    { path : 'events', component : EventsListComponent, 
        resolve : {
            events: EventsListResolver
        } 
    },
    { path : 'events/:id', component : EventDetailsComponent,
     // , canActivate: [EventRouteActivator] 
        resolve : {
            event : EventsResolver
        }           
    },
    { path : 'events/session/new', component: CreateSessionComponent },
    { path : '404', component: Error404Component },
    { path : '', redirectTo: '/events', pathMatch: 'full' },
    { path : 'user', loadChildren: 'app/user/user.module#UserModule' },
]