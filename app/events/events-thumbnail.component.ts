import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector : 'events-thumbnail',
    templateUrl : 'app/events/events-thumbnail.Component.html',
    styles : [ `
        .green { color : yellow !important;}
        .thumbnail { min-height:210px;}
        .well div { color:#bbb }
    `
    ]
})

export class EventsThumbnailComponent{
    @Input() event: IEvent
    // @Output() eventClick = new EventEmitter()

    // handleClick() : void {
    //     this.eventClick.emit('sent from sub');
    //     console.log("Clicked");
    // }

    SomeProprty : string = 'Some Value';


    method1() : void {
        console.log("method1");
    }
}