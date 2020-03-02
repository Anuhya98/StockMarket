import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UsersComponent } from './users/users.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpUrl = 'http://localhost:8001/users/';

  constructor(private httpClient: HttpClient,@Inject(HttpClient)  private ht) { }
  getALLUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }
  saveUser(user:User){
    return this.ht.post(this.httpUrl,user);
  }
  reg(){
    return this.ht.get(`http://localhost:8001/usersreg`);
  }
  deleteUser(id : number):Observable<User>{
    //return this.httpClient.delete<User>(this.httpUrl + id);
    return this.ht.delete(`http://localhost:8001/users/${id}`);
  }
  updateUserInfo(user:User):Observable<User>{
    //return this.httpClient.put<User>(this.httpUrl+user.id,user);
    return this.ht.put(`http://localhost:8001/updateusers`,user);
  }
  getUserById(id:number):Observable<User>{
   // return this.httpClient.get<User>(this.httpUrl+id);
   return this.ht.get(`http://localhost:8001/users/${id}`)
  }
  serActivation(obj){
    return this.ht.put("http://localhost:8001/users/activate",obj)
  }

}
