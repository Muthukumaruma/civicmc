import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teammembers:any = []
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  getDetail(){
    this.http.get("./data/team.json").subscribe(data =>{

      this.teammembers = data;
      
    }, error =>{

    },() =>{
      
    }
    )
    
  }

}
