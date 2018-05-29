import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { UICarouselModule } from "ui-carousel";
import { NewsdetailComponent } from './news/newsdetail/newsdetail.component';
import { MedservicesComponent } from './medservices/medservices.component';
import { ServicedetailComponent } from './medservices/servicedetail/servicedetail.component';
import { TeamComponent } from './team/team.component';
import { PatientcenterComponent } from './patientcenter/patientcenter.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    NewsdetailComponent,
    MedservicesComponent,
    ServicedetailComponent,
    TeamComponent,
    PatientcenterComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UICarouselModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
