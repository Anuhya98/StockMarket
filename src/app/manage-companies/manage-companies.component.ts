import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  managecompanyForm:FormGroup;
  submit()
{
  console.log(this.managecompanyForm.value);
}
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.managecompanyForm=this.formBuilder.group({
      companyname:['',Validators.required],
      turnover:['',Validators.required],
      companyceoname:['',Validators.required],
      selectstockexchange:['',Validators.required],
      selectsector:['',Validators.required],
      aboutcompany:['',Validators.required]
    })
  }

}
