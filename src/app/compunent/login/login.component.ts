import { ServiceAPIService } from '../../Service/service-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { UserAuthService } from '../../Service/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = {} as User;
  constructor(
    private router: Router,
    private ServiceAPI: UserService,
    private userAuth: UserAuthService
  ) {
    ServiceAPI.loadAllUsers()

  }
  adduser() {
    if(this.user.email){
      this.ServiceAPI.loginUser(this.user.email)
    }
  }

  loginx(v:string){
    this.userAuth.doserche(v)
  }

}
