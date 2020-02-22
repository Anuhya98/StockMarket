import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './models/companies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpUrl = 'http://localhost:3002/managecompanies/';

  constructor(private httpClient:HttpClient) { }
  getALLCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
   saveCompany(company:Company):Observable<Company>{
    return this.httpClient.post<Company>(this.httpUrl,company);
   }
   deleteCompany(id : number):Observable<Company>{
    return this.httpClient.delete<Company>(this.httpUrl + id);
  }
  updateCompanyInfo(company:Company):Observable<Company>{
    return this.httpClient.put<Company>(this.httpUrl,company);
  }
  getCompanyById(id:number):Observable<Company>{
    return this.httpClient.get<Company>(this.httpUrl+id);
  }

   
}
