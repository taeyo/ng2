import { Component, Input,  OnInit } from '@angular/core';

@Component({
    selector: 'simple-modal',
    template : `
    <div class="modal fade" id="{{elementId}}" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
				    <a href="#" class="close" data-dismiss="modal">&times;</a>
                    <h4 class="modal-title">{{title}}</h4>
				</div>
                <div class="modal-body">
                    <ng-content></ng-content>
                </div>    
            </div>
        </div>
    </div>
    `,
    styles : [`
        .modal-body { height: 250px; overflow-y:scroll; }
    `]
})

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;

    constructor() { }

    ngOnInit() { }
}