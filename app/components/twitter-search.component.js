"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var twitter_search_service_1 = require('../services/twitter-search.service');
var TwitterSearchComponent = (function () {
    function TwitterSearchComponent(twitterSearchService) {
        this.twitterSearchService = twitterSearchService;
        this.hashtags = new Set();
    }
    TwitterSearchComponent.prototype.onSearch = function () {
        var _this = this;
        this.hashtags.clear();
        console.log("Search commited");
        this.twitterSearchService.search(this.word).subscribe(function (data) {
            _this.searchResult = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            for (var i in _this.searchResult.statuses) {
                for (var j in _this.searchResult.statuses[i].entities.hashtags) {
                    _this.hashtags.add(_this.searchResult.statuses[i].entities.hashtags[j].text);
                }
            }
            console.log(_this.hashtags);
        }, function (error) { return console.log(error); });
    };
    TwitterSearchComponent = __decorate([
        core_1.Component({
            selector: 'twitter-search',
            templateUrl: 'app/components/twitter-search.component.html',
            styleUrls: ['app/components/twitter-search.component.css']
        }), 
        __metadata('design:paramtypes', [twitter_search_service_1.TwitterSearchService])
    ], TwitterSearchComponent);
    return TwitterSearchComponent;
}());
exports.TwitterSearchComponent = TwitterSearchComponent;
//# sourceMappingURL=twitter-search.component.js.map