import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Reward } from './Reward';
import { RewardDetailComponent } from './reward-detail.component';
import { RewardService } from './reward.service';

@Component({
    selector: 'reward-list',
    templateUrl: 'templates/reward-list.html',
    directives: [RewardDetailComponent],
    providers: [RewardService]
})

export class RewardListComponent implements OnInit{
    title = 'Rewards';

    rewards: Reward[];

    constructor(private router: Router, private rewardService: RewardService){}

    getRewards(){
        this.rewardService.getReward().then(rewards => this.rewards = rewards);
    }

    ngOnInit(){
        this.getRewards();
    }

    onSelect(reward: Reward) {
        let link = ['RewardDetail', { id: reward.id }];
        this.router.navigate(link);
    }
}
