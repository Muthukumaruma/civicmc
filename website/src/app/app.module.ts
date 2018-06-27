import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { UICarouselModule } from "ui-carousel";
import { NewsdetailComponent } from './news/newsdetail/newsdetail.component';
import { MedservicesComponent } from './medservices/medservices.component';
import { ServicedetailComponent } from './medservices/servicedetail/servicedetail.component';
import { TeamComponent } from './team/team.component';
import { PatientcenterComponent } from './patientcenter/patientcenter.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { RelatedlinkComponent } from './relatedlink/relatedlink.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { AccesspointComponent } from './accesspoint/accesspoint.component';
import { PaymentComponent } from './payment/payment.component';
import { PatienteduComponent } from './patientedu/patientedu.component';
import { ImmunizationsComponent } from './immunizations/immunizations.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { TermsCondtionComponent } from './terms-condtion/terms-condtion.component';
import { ImmunizationComponent } from './immunization/immunization.component';
import { CarbohydratesComponent } from './carbohydrates/carbohydrates.component';
import { SafehtmlPipe } from './safehtml.pipe';



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
    PatientcenterComponent,
    LocationComponent,
    ContactComponent,
    RelatedlinkComponent,
    PrivacyComponent,
    AppoinmentsComponent,
    AccesspointComponent,
    PaymentComponent,
    PatienteduComponent,
    ImmunizationsComponent,
    InsuranceComponent,
    TermsCondtionComponent,
    ImmunizationComponent,
    CarbohydratesComponent,
    SafehtmlPipe
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UICarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
