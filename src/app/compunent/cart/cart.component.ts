import { Component, OnInit } from '@angular/core';
import { DirectiveDirective } from '../../directives/directive.directive';
import { CommonModule } from '@angular/common';
import { ServiceAPIService } from '../../Service/service-api.service';
import { Interface } from '../../models/interface';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DirectiveDirective,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems:Interface[]=[];
constructor(private router:Router,private service:ServiceService){
}
  ngOnInit(): void {
    this.service.cartItems$.subscribe((data)=>{
      this.cartItems=data
    })
  }

  addtocart(productId: Interface)
  {
    this.service.addToCart(productId)
  }

  removeFromCart(productId: Interface) {
    this.service.removeFromCart(productId);
  }

  remove(productId: string) {
    this.service.remove(productId);
  }

  clearCart() {
    this.service.clearCart();
  }

  addcard(name:Interface)
  {
      this.service.addTobuy(name)
      this.router.navigate(["/Card"]);
  }

}
