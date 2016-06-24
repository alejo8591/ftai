import { Injectable } from '@angular/core';
import { REWARDS } from './reward-mock';

@Injectable()
export class RewardService{
    getReward(){
        return Promise.resolve(REWARDS);
    }

    getRewardDetail(id: number) {
        return this.getReward()
            .then(rewards => rewards.filter(reward => reward.id === id)[0]);
    }
}