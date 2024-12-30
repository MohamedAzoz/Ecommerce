import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceAPIService } from './service-api.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 behaversabuject:BehaviorSubject<boolean>
 users!:User[]
 root!:User
    constructor( private router: Router,private userall:ServiceAPIService,private userserv:UserService) {
    this.behaversabuject=new BehaviorSubject<boolean>(false)
  }
  login(email:string){
      let token="123456"
      localStorage.setItem('userToken',token)
      this.behaversabuject.next(true)
  }
  logout(){
    localStorage.removeItem('userToken')
    this.behaversabuject.next(false)
  }
  get isuserlogin(){
    return (localStorage.getItem('userToken')?true:false)
  }
   userlogin(){
    return this.behaversabuject.asObservable();
  }
  doserche(email: string) {
    this.userserv.getOneuser(email).subscribe((data)=>{
        let token="123456"
        localStorage.setItem('userToken',token)
        this.behaversabuject.next(true)
        this.router.navigate(['/home']);
    })
  }


}
