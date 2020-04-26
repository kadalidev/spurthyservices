import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import {InfomanagerComponent} from '../infomanager/infomanager.component';
import {PatientdetailsComponent} from '../patientdetails/patientdetails.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patientdtl', component: PatientdetailsComponent },
  // { path : '', component : LoginComponent }
  { path : '', component : InfomanagerComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }