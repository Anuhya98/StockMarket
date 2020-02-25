import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  users: User[];
  ngOnInit() {
    this.userService.getALLUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }
  deleteTheUser(user : User){
    this.userService.deleteUser(user.id).subscribe(data =>{
      this.users=this.users.filter(u => data != u);
    });
    
  }
  updateUser(user:User)
  {
    localStorage.removeItem('userId');
    localStorage.setItem('userId',user.id.toString());
    this.router.navigate(['update-user']);
  }

}
