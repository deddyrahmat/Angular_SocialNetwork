import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }
  
  // api_key="b3188e51c8a043519b6f8753a0ef604f";
  // initSources(){
  //   return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  // }
  url_api="https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";

  getPhotosLimit(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5");
  }
}