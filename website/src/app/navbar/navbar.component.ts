import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navData:any = [];
  activeRoute:any;

  constructor(private route: ActivatedRoute, private http:HttpClient) {

    //this.route.params.subscribe(params => {this.activeRoute = params.id})

   }

  ngOnInit() {
    this.getData()
  }

  getData(){
      this.http.get("./data/global.json").subscribe(data =>{
        this.navData = data
      })
  }

}
