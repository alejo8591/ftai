import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Reward } from './Reward'
import { RewardService } from './reward.service';

@Component({
    selector: 'reward-detail',
    templateUrl: 'templates/reward-detail.html'
})

export  class RewardDetailComponent implements OnInit{

    reward: Reward;

    constructor(
        private rewardService: RewardService,
        private routeParams: RouteParams){}

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.rewardService.getRewardDetail(id)
            .then(reward => this.reward = reward);
    }

    goBack() {
        window.history.back();
    }


}