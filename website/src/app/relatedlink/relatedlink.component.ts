import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-relatedlink',
  templateUrl: './relatedlink.component.html',
  styleUrls: ['./relatedlink.component.scss']
})
export class RelatedlinkComponent implements OnInit {

  linksList:any = [];

  constructor( private http:HttpClient) { }

  ngOnInit() {
    this.getLinks()
  }

  getLinks(){
    this.http.get("./data/relatedlinks.json").subscribe(data =>{
      this.linksList = data;
    })
    
  }

}
