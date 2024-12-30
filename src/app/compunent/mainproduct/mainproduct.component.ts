import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Interface } from '../../models/interface';
import { NgClass, CommonModule } from '@angular/common';
import { DirectiveDirective } from '../../directives/directive.directive';
import { DirectivePipe } from '../../pipes/directive.pipe';
import { ServiceService } from '../../Service/service.service';
import { RouterModule } from '@angular/router';
import { ServiceAPIService } from '../../Service/service-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mainproduct',
  standalone: true,
  imports: [CommonModule,DirectiveDirective,RouterModule,FormsModule],
  templateUrl: './mainproduct.component.html',
  styleUrl: './mainproduct.component.css'
})
export class MainproductComponent implements OnInit {
  prudect!:Interface[];
  Apple:Interface[]=[];
  show:boolean=false;
  show2:boolean=false;
  opjct!:Interface[]
  constructor(
    private prodservec:ServiceService,
    private procductByApi:ServiceAPIService
  ){
  }

  ngOnInit(): void {
    this.procductByApi.getAllData().subscribe((data)=>{
      this.prudectfilt=data
    })
  }

  moseover(val:Interface){
    val.show=true

  }
  moseout(val:Interface){
    val.show=false
  }
  addtocart(value:Interface){
    this.show=!this.show
    if(this.show==true){
      this.prodservec.addToCart(value)
    }else{
      this.prodservec.removeFromCart(value)
    }

  }
  addlove(val:Interface){
    this.show2=!this.show2
    if(this.show2==true){
      this.procductByApi.addtolove(val)
    }else{
      this.procductByApi.removelove(val.pname)
    }
  }
   prudectfilt: Interface[] = [];
 @Input()  set doserche(v: string) {
this.procductByApi.getAllData().subscribe(
  (data)=>{
    this.prudectfilt=data.filter((pid:Interface)=>
        pid.pname.toLowerCase().includes(v)
    )
  }
)
}

@Input() set search(value:string){
  this.procductByApi.searchAPI(value).subscribe((data)=>{
      this.prudectfilt=data
  })
}

@Output() eventonProdict:EventEmitter<Interface>=new EventEmitter<Interface>()
addCard(prodict:Interface){
  this.eventonProdict.emit(prodict)
  }
}
