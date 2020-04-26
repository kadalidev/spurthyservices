import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  
  username: string;
  password: string;
  loginSuccess: boolean = false;
  
  ngOnInit() {
  }
  
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(['patientdtl']);
    } else {
      this.username = "";
      this.password = "";
      this.loginSuccess = true;
    }
  }
}
