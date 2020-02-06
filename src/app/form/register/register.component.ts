import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;
submit()
{
  console.log(this.registerForm.value);
}
  constructor(private userService:UserService,private formBuilder:FormBuilder) { }

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
    });
  }

}
