import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
    EventsListComponent,
    EventsThumbnailComponent,
    EventService,
    EventDetailsComponent,
    EventCreateComponent,
    EventRouteActivator,
    EventsListResolver
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService} from './common/toastr.service'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'

import { AuthService } from './user/auth.service'

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
        },
        AuthService
    ],
    bootstrap : [ EventsAppComponent ]
})

export class AppModule {

}

function checkDirtyState(componet:EventCreateComponent){
    if(componet.isDirty)
        return window.confirm('저장되지 않은 내용이 있습니다. 계속하시겠습니까?')
    return true

}