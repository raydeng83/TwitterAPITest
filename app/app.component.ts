import { Component } from '@angular/core';
import {TwitterSearchComponent} from './components/twitter-search.component';
import {TwitterSearchService} from './services/twitter-search.service';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'my-app',
    providers:[HTTP_PROVIDERS, JSONP_PROVIDERS, TwitterSearchService],
    directives: [TwitterSearchComponent],
    template: `
      <twitter-search></twitter-search>
    `
})
export class AppComponent {
}
