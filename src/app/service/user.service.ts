import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserM } from '../models/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }
   
  getUser(){
    return this.httpclient.get('http://localhost:3000/Users')
  }

  addUser(user:UserM){
    return this.httpclient.post('http://localhost:3000/Users', user)
  }
  
}
