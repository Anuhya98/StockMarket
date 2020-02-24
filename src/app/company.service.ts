import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './models/companies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpUrl = 'http://localhost:8080/company/';

  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  getALLCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
   saveCompany(company:Company):Observable<Company>{
    //return this.httpClient.post<Company>(this.httpUrl,company);
    return this.httpClient.post<Company>(this.httpUrl,company);
   }
   deleteCompany(id : number):Observable<Company>{
    //return this.httpClient.delete<Company>(this.httpUrl + id);
    return this.ht.delete(this.httpUrl+id);
  }
  updateCompanyInfo(company:Company):Observable<Company>{
    //return this.httpClient.put<Company>(this.httpUrl+company.id,company);
    return this.ht.put(`http://localhost:8080/updatecompany`,company);
  }
  getCompanyById(id:number):Observable<Company>{
   // return this.httpClient.get<Company>(this.httpUrl+id);
   return this.ht.get(`http://localhost:8080/company/${id}`)
  }

   
}
