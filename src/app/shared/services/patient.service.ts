import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class PatientService {

private url = environment.baseUrl + '/patient';
  constructor(private httpClient: HttpClient) { }

  token = localStorage.getItem('token');

  public getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.url,{ headers: { authorization: this.token } });
  }

  public save(patient: Patient): Observable<any>{
    return this.httpClient.post(this.url, patient,{ headers: { authorization: this.token } });
  }

  public update(patient: Patient): Observable<any>{
    return this.httpClient.put(this.url, patient,{ headers: { authorization: this.token } });
  }

  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id,{ headers: { authorization: this.token } });
  }
  public findById(id): Observable<Patient>{
    return this.httpClient.get<Patient>(this.url + '/' + id,{ headers: { authorization: this.token } });
  }
  public findByUsername(username): Observable<Patient>{
    return this.httpClient.get<Patient>(this.url + '/username/' + username,{ headers: { authorization: this.token } });
  }
}
