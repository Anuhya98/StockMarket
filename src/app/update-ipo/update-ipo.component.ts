import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from '../ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  updateipoForm: FormGroup;
  submit()
{
  console.log(this.updateipoForm.value);
}

  constructor(private formBuilder:FormBuilder,private userService:IpoService,private router:Router) { }

  ngOnInit() {
    this.updateipoForm=this.formBuilder.group({
      companyid:['',Validators.required],
      companyname:['',Validators.required],
      stockexchange:['',Validators.required],
      pricepershare:['',Validators.required],
      totalnoofshares:['',Validators.required]
     
    });

  }

}
