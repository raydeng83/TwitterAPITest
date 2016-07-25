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
var http_1 = require('@angular/http');
var TwitterSearchService = (function () {
    function TwitterSearchService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
    TwitterSearchService.prototype.search = function (word) {
        var token = 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAAK7nwAAAAAAA%2BKwPqL2dZ7YCrQci9j8ejKPBDTo%3DKbXIoAVDYglb6NxbQtciZGS31RAwhpdYgl7PrdNZxv8qbGrX0I';
        var url = "http://localhost:8080/https://api.twitter.com/1.1/search/tweets.json?q=%23" + word;
        var headers1 = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': token });
        console.log(url);
        return this.http.get(url, { headers: headers1 });
    };
    TwitterSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], TwitterSearchService);
    return TwitterSearchService;
}());
exports.TwitterSearchService = TwitterSearchService;
//# sourceMappingURL=twitter-search.service.js.map