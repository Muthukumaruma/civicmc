import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  List:any = []

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getList()
  }

  getList(){
    this.http.get("./data/insurance.json").subscribe(data =>{
      this.List = data;
    })
    
  }

}
