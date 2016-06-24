"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var reward_detail_component_1 = require('./reward-detail.component');
var reward_service_1 = require('./reward.service');
var RewardListComponent = (function () {
    function RewardListComponent(router, rewardService) {
        this.router = router;
        this.rewardService = rewardService;
        this.title = 'Rewards';
    }
    RewardListComponent.prototype.getRewards = function () {
        var _this = this;
        this.rewardService.getReward().then(function (rewards) { return _this.rewards = rewards; });
    };
    RewardListComponent.prototype.ngOnInit = function () {
        this.getRewards();
    };
    RewardListComponent.prototype.onSelect = function (reward) {
        var link = ['RewardDetail', { id: reward.id }];
        this.router.navigate(link);
    };
    RewardListComponent = __decorate([
        core_1.Component({
            selector: 'reward-list',
            templateUrl: 'templates/reward-list.html',
            directives: [reward_detail_component_1.RewardDetailComponent],
            providers: [reward_service_1.RewardService]
        })
    ], RewardListComponent);
    return RewardListComponent;
}());
exports.RewardListComponent = RewardListComponent;
//# sourceMappingURL=reward-list.component.js.map