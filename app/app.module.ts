import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventsThumbnailComponent } from './events/events-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'

import { EventService } from './events/shared/event.service'
import { ToastrService} from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventCreateComponent } from './events/event-create.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventsListResolver } from './events/events-list-resolver.service'

@NgModule({
    imports : [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations : [ 
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        EventCreateComponent,
        Error404Component
    ],
    providers : [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventsListResolver,
        {
            provide : 'canDeactivateCreateEvent',
            useValue : checkDirtyState
        }
    ],
    bootstrap : [ EventsAppComponent ]
})

export class AppModule {

}

function checkDirtyState(componet:EventCreateComponent){
    if(componet.isDirty)
        return window.confirm('저장되지 않은 내용이 있습니다. 정말로 취소하실 겁니까?')
    return true

}