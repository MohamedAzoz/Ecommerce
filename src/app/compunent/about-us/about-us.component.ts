import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { UserAuthService } from '../../Service/user-auth.service';
import { Card } from '../../models/card';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
 user: Card = {} as Card;
  constructor(
    private router: Router,
    private ServiceAPI: UserService,
    private userAuth: UserAuthService
  ) {
    ServiceAPI.loadAllUsers()

  }
  adduser() {
    // if(this.user.email){
    //   this.ServiceAPI.loginUser(this.user.email)
    // }
  }

  loginx(){
      this.router.navigate(["/profile"])
  }
}
