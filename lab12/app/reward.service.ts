import { Injectable } from '@angular/core';
import { REWARDS } from './reward-mock';

@Injectable()
export class RewardService{
    getReward(){
        return Promise.resolve(REWARDS);
    }
}