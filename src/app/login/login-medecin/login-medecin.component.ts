import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/auth/authentication.service";
import {Router} from "@angular/router";
import {Person} from "../../shared/model/person";
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { Medecin } from 'src/app/shared/model/medecin';

@Component({
  selector: 'app-login-medecin',
  templateUrl: './login-medecin.component.html',
  styleUrls: ['./login-medecin.component.css']
})
export class LoginMedecinComponent implements OnInit {

  
  
  
  person: Person = new Person();
  medecin: Medecin;
  constructor(
    private medecinService : MedecinService,
    private authentication : AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {

  }

  findMedecinByUsername(){
    this.medecinService.findByUsername(this.person.username)
      .subscribe(data => {
        this.medecin = data;
        console.log(this.medecin);
        this.router.navigate(['/medecin',this.medecin.id]);
      }, err => {
        console.log(err);
      });
    }

  authenticate(){
    this.authentication.authenticate(this.person).subscribe(res => {
      //console.log('res1' +  res);

      const token = res.headers.get('Authorization');
      //console.log('res' +  res);
      //console.log('token' + token);
      localStorage.setItem('token', token);
      this.findMedecinByUsername();
    }, error1 => {
      console.log(error1.error);
    });

  }

}
