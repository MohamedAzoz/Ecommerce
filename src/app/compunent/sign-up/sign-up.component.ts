import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { UserAuthService } from '../../Service/user-auth.service';
import { ServiceService } from '../../Service/service.service';
import { UserServiceService } from '../../Service/user-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user: User = {} as User;
  userData!:User|null
  constructor(
    private router: Router,
    private ServiceAPI: UserService,
    private Service: UserServiceService,
    private userAuth: UserAuthService
  ) {
         this.ServiceAPI.loadAllUsers()
  }

  adduser() {
    // this.ServiceAPI.addUser(this.user).subscribe((data) => {
      // });
      if (this.user.email) {
        // تخزين البيانات في الخدمة
        this.ServiceAPI.signUpUser(this.user);
          this.router.navigate(['/home']);
    }
  }


  loginx(val: string) {
    this.userAuth.login(val);
  }

}
