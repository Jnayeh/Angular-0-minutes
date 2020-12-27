import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../model/patient';
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private url = environment.baseUrl + '/login';
  constructor(private httpClient: HttpClient ) { }
  public authenticate(person: Person){
    return this.httpClient.post(this.url, person , {observe: 'response'});
    console.log(person);
  }
}
