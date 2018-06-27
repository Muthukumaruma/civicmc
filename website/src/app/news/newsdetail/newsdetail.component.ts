import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.scss']
})
export class NewsdetailComponent implements OnInit {

  newsdata:any = [];

  detail: any =[];

  newsid:any;

  newsData:any

  constructor(private route: ActivatedRoute, private http:HttpClient) {
    
    this.route.params.subscribe(params => {this.newsid = params.id})
    
   }

  ngOnInit() {

    this.getDetail()
    
  }

  ngOnDestroy(){
    this.newsData.unsubscribe();
  }

  getDetail(){
    this.newsData = this.http.get("./data/news.json").subscribe(data =>{
      this.newsdata = data;
      
      for (let i = 0; i < this.newsdata.news.length; i++) {
        
        let result = this.newsdata.news[i];

        if(result.id == this.newsid){

          this.detail = result

          console.log(result)
        }
        
      }
    })
    
    
  }

}
