"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const event_service_1 = require('./shared/event.service');
const toastr_service_1 = require('../common/toastr.service');
let EventsListComponent = class EventsListComponent {
    constructor(eventService, toastr) {
        this.eventService = eventService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
};
EventsListComponent = __decorate([
    core_1.Component({
        selector: 'events-list',
        template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event">
                </event-thumbnail>
            </div>
        </div>
    </div>
    `
    }), 
    __metadata('design:paramtypes', [event_service_1.EventService, toastr_service_1.ToastrService])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map