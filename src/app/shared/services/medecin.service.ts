import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medecin} from '../model/medecin';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MedecinService {
private url = environment.baseUrl + '/medecin';
  constructor(private httpClient: HttpClient) { }

  token = localStorage.getItem('token');
  
  public getAll(): Observable<Medecin[]> {
    return this.httpClient.get<Medecin[]>(this.url,{ headers: { authorization: this.token } });
  }

  public save(medecin: Medecin): Observable<any>{
    return this.httpClient.post(this.url, medecin,{ headers: { authorization: this.token } });
  }

  public update(medecin: Medecin): Observable<any>{
    return this.httpClient.put(this.url, medecin,{ headers: { authorization: this.token } });
  }

  public delete(id: string): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id,{ headers: { authorization: this.token } });
  }
  public findById(id: string): Observable<Medecin>{
    return this.httpClient.get<Medecin>(this.url + '/' + id,{ headers: { authorization: this.token } });
  }

}
