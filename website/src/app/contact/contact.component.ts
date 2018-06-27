import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name:string = '';
  email:string ='';
  phone: any ='';
  subject:string = '';
  comments:string = '';
  submited:boolean = false;
  validated:boolean;
  url:string

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
  onSubmit(){
    this.submited = true;
    this.validate();
    
    this.url = "http://civic.bogarexports.com/data/handler.php";
    var body ="name="+this.name+"&email="+this.email+"&message="+this.comments;
      this.http.post(this.url, body).subscribe(res => console.log(res));

    if(this.validated == true){
          }
  }

  validate(){
    if(name !='' && this.email != '' && this.phone != '' && this.subject != '' && this.comments !=''){
      this.validated = true;
    }
  }
}
