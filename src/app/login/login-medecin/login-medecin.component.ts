import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/auth/authentication.service";
import {Router} from "@angular/router";
import {Person} from "../../shared/model/person";

@Component({
  selector: 'app-login-medecin',
  templateUrl: './login-medecin.component.html',
  styleUrls: ['./login-medecin.component.css']
})
export class LoginMedecinComponent implements OnInit {

  
  
  //patient: Patient = new Patient();
  person: Person = new Person();
  constructor(
    private authentication : AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {

  }
  authenticate(){
    this.authentication.authenticate(this.person).subscribe(res => {
      //console.log('res1' +  res);

      const token = res.headers.get('Authorization');
      //console.log('res' +  res);
      //console.log('token' + token);
      localStorage.setItem('token', token);
      this.router.navigate(['/home',1]);
    }, error1 => {
      console.log(error1.error);
    });

  }

}
