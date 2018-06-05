import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.scss']
})
export class AppoinmentsComponent implements OnInit {

  doctorsList:any = []

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getDoctors()
  }

  getDoctors(){
    this.http.get("./data/doctors.json").subscribe(data =>{
      this.doctorsList = data;
    })
    
  }

}
