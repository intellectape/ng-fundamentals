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
let EventThumbnailComponent = class EventThumbnailComponent {
    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return { greens: isEarlyStart, bold: isEarlyStart };
    }
    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am') {
            return { color: '#003300', 'font-weight': 'bold' };
        }
        return {};
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], EventThumbnailComponent.prototype, "event", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle] = "getStartTimeStyle()" [ngSwitch] = "event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf = "event?.location">
                <span>Location: {{event?.location.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf = "event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
            </div>
        </div>
    `,
        styles: [`
        .greens { color: #003300; !important;}
        .bold {font-weight: bold;}
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
    }), 
    __metadata('design:paramtypes', [])
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map