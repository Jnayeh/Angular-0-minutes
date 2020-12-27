import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Consultation} from '../model/consultation';



@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private url = environment.baseUrl + '/consultation';
  constructor(private httpClient: HttpClient) { }

  token = localStorage.getItem('token');

  public getAll(): Observable<Consultation[]> {
    return this.httpClient.get<Consultation[]>(this.url,{ headers: { authorization: this.token } });
  }

  public save(consultation: Consultation): Observable<any>{
    return this.httpClient.post(this.url, consultation,{ headers: { authorization: this.token } });
  }

  public update(consultation: Consultation): Observable<any>{
    return this.httpClient.put(this.url, consultation,{ headers: { authorization: this.token } });
  }

  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id,{ headers: { authorization: this.token } });
  }

}

