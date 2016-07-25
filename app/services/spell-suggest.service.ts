import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
declare var jQuery:any;

@Injectable()
export class SpellSuggestService {
    constructor(private http:Http) {
    }

    search(rawWord:string) {
        let url = "http://localhost:8080/http://www.dictionary.com/misspelling?term=" + rawWord;
        return this.http.get(url);
    }

    getSuggestedWord(htmlContent:any) {
        console.log(htmlContent);
    }


}
