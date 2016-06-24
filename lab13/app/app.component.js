"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_component_1 = require('./home.component');
var say_component_1 = require('./say.component');
var reward_list_component_1 = require('./reward-list.component');
var reward_detail_component_1 = require('./reward-detail.component');
var reward_service_1 = require('./reward.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Rewards';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'rewards',
            templateUrl: 'templates/rewards.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                reward_service_1.RewardService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/home',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/say',
                name: 'Say',
                component: say_component_1.SayComponent
            },
            {
                path: '/reward-list',
                name: 'RewardList',
                component: reward_list_component_1.RewardListComponent
            },
            {
                path: '/detail/:id',
                name: 'RewardDetail',
                component: reward_detail_component_1.RewardDetailComponent
            }
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map