import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HomeComponent } from './home.component';
import { SayComponent } from './say.component';
import { RewardDetailComponent } from './reward-detail.component';
import { RewardService } from './reward.service';

@Component({
    selector: 'rewards',
    templateUrl: 'templates/rewards.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        RewardService
    ]
})

@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/say',
        name: 'Say',
        component: SayComponent,
        useAsDefault: true

    }
])

export class AppComponent{
    title = 'Rewards'
}