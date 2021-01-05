import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/auth/authentication.service";
import {Router} from "@angular/router";
import {Person} from "../../shared/model/person";
import { PatientService } from 'src/app/shared/services/patient.service';
import { Patient } from 'src/app/shared/model/patient';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  
  //patient: Patient = new Patient();
  person: Person = new Person();
  patient: Patient;
  constructor(
    private patientService : PatientService,
    private authentication : AuthenticationService,
    private router: Router) { 
      
    }

  ngOnInit(): void {

  }
  findPatientByUsername(){
    this.patientService.findByUsername(this.person.username)
      .subscribe(data => {
        this.patient = data;
        this.router.navigate(['/patient',this.patient.id]);
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
      this.findPatientByUsername();
    }, error1 => {
      console.log(error1.error);
    });

  }
}
