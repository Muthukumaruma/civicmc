import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsdetailComponent } from './news/newsdetail/newsdetail.component';
import { ServicedetailComponent } from './medservices/servicedetail/servicedetail.component';
import { MedservicesComponent } from './medservices/medservices.component';
import { TeamComponent } from './team/team.component';
import { PatientcenterComponent } from './patientcenter/patientcenter.component';


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
    path:"team",
    component: TeamComponent
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
