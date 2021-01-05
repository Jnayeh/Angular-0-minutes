import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/auth/authentication.service";
import {Router} from "@angular/router";
import {Person} from "../shared/model/person";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //patient: Patient = new Patient();
  person: Person = new Person();
  change= true;
  constructor(
    private authentication : AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {

  }
  
  
// http.cors() security config spring + cors filter
}
