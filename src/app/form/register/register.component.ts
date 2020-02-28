import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;

  constructor(private userService:UserService,private formBuilder:FormBuilder,private s:Router) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      username:['',Validators.required],
      id:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneno:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
  }
  addUser()
  {
    this.userService.saveUser(this.registerForm.value).subscribe(data =>{
      console.log('User Inserted Successfully');
      if(data.res==0){
        alert("User Already Avaialable");
      }
         else if(data.res==1){
          console.log("User Details are Entered Success fully");
          //alert("Successfully ENtered New User");
        //alert("Added New User");
        this.s.navigate(['/users']);
        }
        else{
          alert("ERROR");
        }
    });
  }
  submit()
{
  this.userService.reg().subscribe(data =>{
    console.log("Coming status::"+data.reg);
  })

}


}
