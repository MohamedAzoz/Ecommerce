import { UserService } from './../../Service/user.service';
import { UserAuthService } from './../../Service/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceAPIService } from '../../Service/service-api.service';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { User } from '../../models/user';
import { Interface } from '../../models/interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  islook: boolean = true;
  count:number=0
  count2:number=0
  root!:User[]
  userone!:User
  constructor(
    private userAuth: UserAuthService,
    private serche:ServiceService,
    private service:ServiceAPIService
  ) {
    this.serche.getCartItems().subscribe((data)=>{
       this.count=data.length
    })
    this.service.getloves().subscribe((x)=>{
       this.count2=x.length
    })
  }
  ngOnInit(): void {
    this.userAuth.userlogin().subscribe((x) => {
      this.islook = x;
    });

  }
  logout() {
    this.userAuth.logout();
  }


}
