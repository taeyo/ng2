import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService} from '../common/toastr.service'
// for using resolver
import { ActivatedRoute } from '@angular/router'

@Component({

    template : `
    <div>
        <h1>Events List</h1>
        <hr />
        <div class="col-md-5" *ngFor="let eventItem of events">
            <events-thumbnail
                [event]="eventItem" (click)='handleClick(eventItem.name)' #thumbnail></events-thumbnail>
        </div>
    </div>
    `
}) //    selector : 'events-list',

export class EventsListComponent implements OnInit {
    events: any;

    //inject Event-Service
    constructor(private eventSvc : EventService, 
                private toastrSvc: ToastrService,
                private route: ActivatedRoute){
        
    }

    ngOnInit(){
        //리졸버 사용 시 아래의 코드는 필요없음. 데이터는 리졸버에게서 넘어옴.
        // this.eventSvc.getEvents().subscribe((event) => {
        //     this.events = event;        
        // });
        this.events = this.route.snapshot.data['events'];
    }

    handleClick(name : string) : void {
        this.toastrSvc.success(name);
    }

    // event1 = {
    //     id : 1,
    //     name:'ngConf 2025', 
    //     date: '3/1/2025', 
    //     time: '8am', 
    //     price : 599.99,
    //     imageUrl : '/app/assets/images/angularconnect-shield.png',
    //     location: {
    //         address: '123 Main St', 
    //         city: 'Salt Lake City, UT', 
    //         country: 'USA'
    //     }
    // }

    

    handleEventClick(data : any) : void {
        console.log('received : ' + data);
    }
}