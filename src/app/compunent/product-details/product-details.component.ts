import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Interface } from '../../models/interface';
import { Location } from '@angular/common';
import { ServiceAPIService } from '../../Service/service-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id:number=0
  prod!:Interface 
  Apple:Interface[]=[]
  indexid:number=0
   all_ids:number[]=[]
constructor(
  private active:ActivatedRoute,
  private prodctserve:ServiceService,
  private router:Router,
  private locat:Location,
  private prodctserveApi:ServiceAPIService
){

}
  ngOnInit(): void {
        // this.id=Number(this.active.snapshot.paramMap.get("Prdid"))
        this.active.paramMap.subscribe((i)=>{
             this.id=Number(i.get('Prdid'))||0;

        // let prod1=this.prodctserve.prodictbyid(this.id)
        // if(prod1){
        //   this.prod=prod1
        // }else{
        // this.router.navigate(['**'])
        this.prodctserveApi.getOneproduct(this.id.toString()).subscribe({
          next:(data)=>{
            this.prod=data
          }
        })

      });

        // this.all_ids=this.prodctserve.getarrids();
        // console.log(this.all_ids);
        this.prodctserveApi.getAllData().subscribe(
          (data)=>{
            this.all_ids=data.map((pid)=>Number(pid.id));
          }
        )

  }

  addtocart(value:Interface)
  {
      this.prodctserve.addToCart(value)
  }

prevfun(){
   this.indexid=this.all_ids.indexOf(this.id)
   this.router.navigate(['/ProductDetails',this.all_ids[--this.indexid]])
}
nextfun(){
  this.indexid=this.all_ids.indexOf(this.id)
  this.router.navigate(['/ProductDetails',this.all_ids[++this.indexid]])
}

goback(){
  this.locat.back()
}
}
