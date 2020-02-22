import { Component, OnInit } from '@angular/core';
import { Company } from '../models/companies';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.css']
})
export class ManagecompaniesComponent implements OnInit {

  constructor(private router:Router,private companyService:CompanyService) { }
  managecompanies: Company[];

  ngOnInit() {
    this.companyService.getALLCompanies().subscribe(data => {
      this.managecompanies = data;
    });
  }
  deleteCompany(id:number){
    this.companyService.deleteCompany(id).subscribe();
    this.managecompanies=this.managecompanies.filter(u => u.id!==id);
  }
  updateCompany(company:Company)
  {
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId',company.id.toString());
    this.router.navigate(['/update-company']);
  }

}
