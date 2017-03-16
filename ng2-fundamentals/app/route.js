"use strict";
const event_details_component_1 = require('./events/event-details/event-details.component');
const create_event_component_1 = require('./events/create-event.component');
const events_list_component_1 = require('./events/events-list.component');
const _404_component_1 = require('./errors/404.component');
const event_route_activator_service_1 = require('./events/event-details/event-route-activator.service');
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/new', component: create_event_component_1.CreateEventComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: 'events/', pathMatch: 'full' }
];
//# sourceMappingURL=route.js.map