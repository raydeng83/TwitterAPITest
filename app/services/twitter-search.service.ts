import { Injectable } from '@angular/core';
import {Jsonp, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TwitterSearchService {
  constructor (private http: Http, private jsonp: Jsonp) {}

  search(word: string) {

  	let token:string ='Bearer '+'AAAAAAAAAAAAAAAAAAAAAK7nwAAAAAAA%2BKwPqL2dZ7YCrQci9j8ejKPBDTo%3DKbXIoAVDYglb6NxbQtciZGS31RAwhpdYgl7PrdNZxv8qbGrX0I';
    let url = "http://localhost:8080/https://api.twitter.com/1.1/search/tweets.json?q=%23"+word;
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': token});

    console.log(url);
    return this.http.get(url, {headers: headers1});
  }
}
