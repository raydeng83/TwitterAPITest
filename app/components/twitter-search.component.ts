import { Component } from '@angular/core';
import {TwitterSearchService} from '../services/twitter-search.service';

@Component({
  selector:'twitter-search',
  templateUrl: 'app/components/twitter-search.component.html',
  styleUrls:  ['app/components/twitter-search.component.css']
})
export class TwitterSearchComponent {

  searchResult : string[];
  word: string;
  hashtags = new Set();

  constructor (private twitterSearchService: TwitterSearchService) {}

  onSearch() {
    this.hashtags.clear();

    console.log("Search commited");

    this.twitterSearchService.search(this.word).subscribe(
    	data => {
        this.searchResult=JSON.parse(JSON.parse(JSON.stringify(data))._body);
        for (var i in this.searchResult.statuses) {
          for (var j in this.searchResult.statuses[i].entities.hashtags) {
            this.hashtags.add(this.searchResult.statuses[i].entities.hashtags[j].text);
          }
        }
        console.log(this.hashtags);
      },
    	error => console.log(error)
    );
  }
}
