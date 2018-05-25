import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList:any =[];

  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.getNews();

  }

  //call news json
  getNews(){
    this.http.get("./data/news.json").subscribe(data =>{
      this.newsList = data;
    })
  }

}
