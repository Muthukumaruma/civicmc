import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsdetailComponent } from './news/newsdetail/newsdetail.component';
import { ServicedetailComponent } from './medservices/servicedetail/servicedetail.component';
import { MedservicesComponent } from './medservices/medservices.component';
import { TeamComponent } from './team/team.component';
import { PatientcenterComponent } from './patientcenter/patientcenter.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
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

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"services",
    component: MedservicesComponent
  },
  {
    path:"carbhohydrates",
    component: CarbohydratesComponent
  },
  {
    path:"immunizations",
    component: ImmunizationComponent
  },
  {
    path:"terms",
    component: TermsCondtionComponent
  },
  {
    path:"insurance",
    component: InsuranceComponent
  },
  {
    path:"patient-education",
    component: PatienteduComponent
  },
  {
    path:"immunizations",
    component: ImmunizationsComponent
  },
  {
    path:"accesspoint",
    component: AccesspointComponent
  },
  {
    path:"payment",
    component: PaymentComponent
  },
  {
    path:"appoinment",
    component: AppoinmentsComponent
  },
  {
    path:"team",
    component: TeamComponent
  },
  {
    path:"news",
    component: NewsComponent
  },
  {
    path:"location",
    component: LocationComponent
  },
  {
    path:"privacy",
    component: PrivacyComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"patientcenter",
    component: PatientcenterComponent
  },
  {
    path:"news/:id",
    component: NewsdetailComponent
  },
  {
    path:"service/:id",
    component: ServicedetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
