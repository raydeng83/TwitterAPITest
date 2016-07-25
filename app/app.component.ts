import { Component } from '@angular/core';
import {TwitterSearchComponent} from './components/twitter-search.component';
import {TwitterSearchService} from './services/twitter-search.service';
import { HTTP_PROVIDERS } from '@angular/http';
import {SpellSuggestService} from "./services/spell-suggest.service";

@Component({
    selector: 'my-app',
    providers:[HTTP_PROVIDERS, TwitterSearchService, SpellSuggestService],
    directives: [TwitterSearchComponent],
    template: `
      <twitter-search></twitter-search>
    `
})
export class AppComponent {
}
