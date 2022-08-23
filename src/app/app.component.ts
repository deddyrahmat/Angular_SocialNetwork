import { Component,OnInit } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'social_network';
  articles:any = [];

  constructor( private newsApi : NewsService){}

  ngOnInit(): void {
    this.newsApi.getPhotosLimit()
    .subscribe((res:any) => {
      // console.log('res', res);
      this.articles = res;
    });

    // this.newsApi.initSources()
    // .subscribe((res:any) => {
    //   console.log('res news', res);
    //   // this.sources = res.sources;
    // })
  }
}
