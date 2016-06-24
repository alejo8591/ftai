import { Component, Input } from '@angular/core';
import { Reward } from './Reward'

@Component({
    selector: 'reward-detail',
    templateUrl: 'templates/reward-detail.html'
})

export class RewardDetailComponent{
    @Input()
    reward: Reward;
}