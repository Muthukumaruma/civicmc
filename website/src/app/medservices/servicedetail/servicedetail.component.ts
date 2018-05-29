import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.scss']
})
export class ServicedetailComponent implements OnInit {

  
  servicedata:any = [];

  detail: any =[];

  routeVal:any;

  loaded:boolean;

  constructor(private route: ActivatedRoute, private http:HttpClient) { 

    this.route.params.subscribe(params => {this.routeVal = params.id})

  }

  ngOnInit() {

    this.getDetail();

    this.route.params.subscribe (res => {

      if(this.loaded != true) return false
      this.getCurrntDetail();
      
      })

  }

  getDetail(){
    this.http.get("./data/medicalservices.json").subscribe(data =>{

      this.servicedata = data;
      
      this.loaded = true
      
    }, error =>{

    },() =>{
      this.getCurrntDetail();
    }
    )
    
  }

  getCurrntDetail(){

    for (let i = 0; i < this.servicedata.servicedata.length; i++) {
        
      let result = this.servicedata.servicedata[i];

      if(result.id == this.routeVal){

        this.detail = result

        //console.log(result)
      }
      
    }
  }

}
