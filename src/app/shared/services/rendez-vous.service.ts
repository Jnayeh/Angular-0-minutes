import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { RendezVous } from '../model/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private url = environment.baseUrl + '/rdv';
  constructor(private httpClient: HttpClient) { }

  token = localStorage.getItem('token');

  public getAll(): Observable<RendezVous[]> {
    return this.httpClient.get<RendezVous[]>(this.url,{ headers: { authorization: this.token } });
  }

  public save(rendezVous: RendezVous): Observable<any>{
    return this.httpClient.post(this.url, rendezVous,{ headers: { authorization: this.token } });
  }

  public update(rendezVous: RendezVous): Observable<any>{
    return this.httpClient.put(this.url, rendezVous,{ headers: { authorization: this.token } });
  }

  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id,{ headers: { authorization: this.token } });
  }

}