import { Component } from '@angular/core';
import {TwitterSearchService} from '../services/twitter-search.service';
import {SpellSuggestService} from '../services/spell-suggest.service';

@Component({
    selector: 'twitter-search',
    templateUrl: 'app/components/twitter-search.component.html',
    styleUrls: ['app/components/twitter-search.component.css']
})
export class TwitterSearchComponent {

    searchResult:any;
    word:string;
    hashtags = new Set();
    withoutSuggest:boolean = true;
    displayResult:boolean = false;


    constructor(private twitterSearchService:TwitterSearchService, private spellSuggestService:SpellSuggestService) {
    }

    onSearch() {
        this.displayResult = true;
        this.hashtags.clear();

        console.log("Search commited");

        this.twitterSearchService.search(this.word).subscribe(
            data => {
                this.searchResult = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                for (var i in this.searchResult.statuses) {
                    for (var j in this.searchResult.statuses[i].entities.hashtags) {
                        this.hashtags.add(this.searchResult.statuses[i].entities.hashtags[j].text);
                    }
                }

                console.log(this.hashtags);
                console.log(this.hashtags.size);

                if (!this.hashtags.size) {
                    console.log("enter if clause");
                    this.withoutSuggest = false;
                    this.spellSuggestService.search(this.word).subscribe(
                        text => {
                            let htmlContent = JSON.parse(JSON.stringify(text))._body;
                        },
                        error => {
                            console.log(error);
                            let htmlContent = JSON.parse(JSON.stringify(error))._body;
                            this.word = jQuery(htmlContent).find('.closest-result').find('span').text();
                            this.onSearch();
                        }
                    );

                    this.withoutSuggest = false;
                }

            },
            error => console.log(error)
        );
    }
}
