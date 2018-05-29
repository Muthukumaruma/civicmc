import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medservices',
  templateUrl: './medservices.component.html',
  styleUrls: ['./medservices.component.scss']
})
export class MedservicesComponent implements OnInit {

  url:any;
  serviceList:any = [];

  constructor(private router: Router, private http:HttpClient) {
    this.url=this.router.url
   }

  ngOnInit() {

    this.getService()

  }

  getService(){
    this.http.get("./data/medicalservices.json").subscribe(data =>{
      this.serviceList = data;
    })
    
  }

}
