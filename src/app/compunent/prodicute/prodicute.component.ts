import { Component, OnInit } from '@angular/core';
import { Interface } from '../../models/interface';
import { CommonModule } from '@angular/common';
import { DirectiveDirective } from '../../directives/directive.directive';
import { DirectivePipe } from '../../pipes/directive.pipe';
import { ServiceService } from '../../Service/service.service';
import { RouterModule } from '@angular/router';
import { ServiceAPIService } from '../../Service/service-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodicute',
  standalone: true,
  imports: [CommonModule,DirectiveDirective,RouterModule,FormsModule],
  templateUrl: './prodicute.component.html',
  styleUrl: './prodicute.component.css'
})
export class ProdicuteComponent implements OnInit {
  prudect!:Interface[];
  show:boolean=false;
  show2:boolean=false;
  clickbtn:boolean=false;
  clickbtn1:boolean=false;
  clickbtn2:boolean=false;
  clickbtn3:boolean=false;
  prudectfilt: Interface[] = [];
  constructor(
    private prodservec:ServiceService,
    private procductByApi:ServiceAPIService
  ){
    this.procductByApi.getAllData().subscribe((data)=>{
      this.prudectfilt=data
    })
  }
  ngOnInit(): void {
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



Apple(value:string){
  this.clickbtn=!this.clickbtn;
  if(this.clickbtn==true){
    this.procductByApi.searchAPI(value).subscribe((data)=>{
        this.prudectfilt=data
    })
  }
  else{
    this.procductByApi.getAllData().subscribe((data)=>{
      this.prudectfilt=data})
  }
}
Honor(value:string){
  this.clickbtn1=!this.clickbtn1;
  if(this.clickbtn1==true){
    this.procductByApi.searchAPI(value).subscribe((data)=>{
        this.prudectfilt=data
    })
  }
  else{
    this.procductByApi.getAllData().subscribe((data)=>{
      this.prudectfilt=data})
  }
}
Samsung(value:string){
  this.clickbtn2=!this.clickbtn2;
  if(this.clickbtn2==true){
    this.procductByApi.searchAPI(value).subscribe((data)=>{
        this.prudectfilt=data
    })
  }
  else{
    this.procductByApi.getAllData().subscribe((data)=>{
      this.prudectfilt=data})
  }
}
HUAWEI(value:string){
  this.clickbtn3=!this.clickbtn3;
  if(this.clickbtn3==true){
    this.prodservec.search(value)

  }
  else{
    this.procductByApi.getAllData().subscribe((data)=>{
      this.prudectfilt=data})
  }
}



//  @Output() eventonProdict:EventEmitter<Interface>=new EventEmitter<Interface>()

// addtoCard(prodict:Interface){
// this.eventonProdict.emit(prodict)
// }

}
