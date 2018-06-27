import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList:any =[];

  newsData: any

  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.getNews();

  }

  ngOnDestroy(){
    this.newsData.unsubscribe();
  }

  //call news json
  getNews(){
    this.newsData = this.http.get("./data/news.json").subscribe(data =>{
      this.newsList = data;
    })
  }

}
