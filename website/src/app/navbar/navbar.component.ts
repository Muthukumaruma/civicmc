import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navData:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
      this.http.get("./data/global.json").subscribe(data =>{
        this.navData = data
      })
  }

}
