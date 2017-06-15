import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import {
    EventsListComponent,
    EventsThumbnailComponent,
    EventService,
    EventDetailsComponent,
    EventCreateComponent,
    // EventRouteActivator,
    EventsListResolver,
    EventsResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'

import { 
    TOASTR_TOKEN, 
    IToastr, 
    JQ_TOKEN, 
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index'

import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'

import { AuthService } from './user/auth.service'
import { CollapsibleWellComponent } from './common/collapsible-well.component'

declare let toastr : IToastr
declare let jQuery : Object

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule
    ],
    declarations : [ 
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        EventCreateComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    providers : [
        EventService,
        //ToastrService,
        {
            provide:TOASTR_TOKEN,
            useValue : toastr
        },
        {
            provide:JQ_TOKEN,
            useValue : jQuery
        },
        // EventRouteActivator,
        EventsListResolver,
        {
            provide : 'canDeactivateCreateEvent',
            useValue : checkDirtyState
        },
        EventsResolver,
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