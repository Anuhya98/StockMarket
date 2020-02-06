import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addipo',
  templateUrl: './addipo.component.html',
  styleUrls: ['./addipo.component.css']
})
export class AddipoComponent implements OnInit {
 addipoForm:FormGroup;
  ipoService: any;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.addipoForm=this.formBuilder.group({
      companyid:['',Validators.required],
      companyname:['',Validators.required],
      stockexchange:['',Validators.required],
      pricepershare:['',Validators.required],
      totalnoofshares:['',Validators.required]
      
    });
  }
    addIPO()
  {
    this.ipoService.saveUser(this.addipoForm.value).subscribe(data =>{
      console.log('User Inserted Successfully');
    });

  }

}

