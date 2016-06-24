import { Component, OnInit } from '@angular/core';
import { Reward } from './Reward';
import { RewardDetailComponent } from './reward-detail.component';
import { RewardService } from './reward.service';

@Component({
    selector: 'rewards',
    templateUrl: 'templates/rewards.html',
    directives: [RewardDetailComponent],
    providers: [RewardService]
})

export class AppComponent implements OnInit{
    title = 'Rewards';

    rewards: Reward[];
    selected: Reward;

    constructor(private rewardService: RewardService){}

    getRewards(){
        this.rewardService.getReward().then(rewards => this.rewards = rewards);
    }

    ngOnInit(){
        this.getRewards();
    }

    onSelect(reward: Reward){
        this.selected = reward;
    }
}