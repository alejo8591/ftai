import {Component} from '@angular/core';

export class Reward{
    id: number;
    name: string;
    description: string;
    points: number;
}

@Component({
    selector: 'my-app',
    templateUrl: 'templates/reward-detail.html'
})

export class AppComponent {
    title = 'Reward';

    selected: Reward;

    rewards = REWARDS;

    onSelect(reward: Reward){
        this.selected = reward;
    }
}

let REWARDS: Reward[] =[
    {
        id: 1,
        name: 'One night hotel',
        description: 'One nigth hotel from Bogotá D.C.',
        points: 40
    },
    {
        id: 2,
        name: 'Two nights hotel',
        description: 'Two night hotel from Bogotá D.C.',
        points: 90
    },
    {
        id: 3,
        name: 'Three nights hotel',
        description: 'Three nights hotel from Bogotá D.C.',
        points: 40
    }
];