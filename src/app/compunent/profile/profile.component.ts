import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../Service/user.service';
import { Interface } from '../../models/interface';
import { CommonModule } from '@angular/common';
import { ServiceAPIService } from '../../Service/service-api.service';
import { DirectiveDirective } from '../../directives/directive.directive';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,DirectiveDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
    prudectfilt:Interface[]=[];
    prudect:Interface[]=[];
  root!:User|null
constructor(private userService:UserService,private cart:ServiceService,private love:ServiceAPIService){
  this.userService.loadAllUsers();
}
ngOnInit(): void {
    this.userService.currentUser$.subscribe((user) => {
      if(user){
        this.root = user;
      }
    });
    this.love.loveItems$.subscribe((x)=>{
      if(x){
        this.prudectfilt=x
      }
    });
    this.cart.getbuy().subscribe((x)=>{
        this.prudect=x
    })
  }
remove(nam:string){
 this.love.removelove(nam)
}
addtocart(v:Interface)
{
 this.cart.addToCart(v)
}
}
