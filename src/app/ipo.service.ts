import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpoComponent } from './ipo/ipo.component';
import { IPO } from './models/ipos';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  httpUrl = 'http://localhost:3001/ipos/';

  constructor(private httpClient:HttpClient) { }
  getALLIPOs(): Observable<IPO[]> {
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }
  saveIPO(ipos:IPO):Observable<IPO>{
    return this.httpClient.post<IPO>(this.httpUrl,ipos);
  }
  deleteIPO(id : number):Observable<IPO>{
    return this.httpClient.delete<IPO>(this.httpUrl + id);
  }
  updateIPOInfo(ipo:IPO):Observable<IPO>{
    return this.httpClient.put<IPO>(this.httpUrl+ipo.companyid,ipo);
  }
  getIPOById(id:number):Observable<IPO>{
    return this.httpClient.get<IPO>(this.httpUrl+id);
  }
}
