import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dossier} from '../model/dossier';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class DossierService {
private url = environment.baseUrl + '/DossierMedical';

  constructor(private httpClient: HttpClient) { }

  token = localStorage.getItem('token');

  public getAll(): Observable<Dossier[]> {
    return this.httpClient.get<Dossier[]>(this.url,{ headers: { authorization: this.token } });
  }

  public save(dossier: Dossier): Observable<any>{
    return this.httpClient.post(this.url, dossier,{ headers: { authorization: this.token } });
  }

  public update(dossier: Dossier): Observable<any>{
    return this.httpClient.put(this.url, dossier,{ headers: { authorization: this.token } });
  }

  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id,{ headers: { authorization: this.token } });
  }
}