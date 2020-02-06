import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
ipoForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  submit(){
    console.log(this.ipoForm.value);
  }

  ngOnInit() {
    this.ipoForm=this.formBuilder.group({
      companyid:['',Validators.required],
      companyname:['',Validators.required],
      stockexchange:['',Validators.required],
      pricepershare:['',Validators.required],
      totalnoofshares:['',Validators.required]
      
    });

  }

}
