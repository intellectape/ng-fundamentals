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
const event_service_1 = require('../shared/event.service');
const router_1 = require('@angular/router');
let EventDetailsComponent = class EventDetailsComponent {
    constructor(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
};
EventDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/events/event-details/event-details.component.html',
        styles: [`
            .container { padding-left: 20px; padding-right: 20px; }
            .event-image { height: 100px; }
    `]
    }), 
    __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map