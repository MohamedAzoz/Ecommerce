import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Interface } from '../../models/interface';
import { RouterModule } from '@angular/router';
import { MainproductComponent } from '../mainproduct/mainproduct.component';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterModule, MainproductComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  doserche:string="";
  totail:number=0;
  prodict:Interface[]=[]
  constructor(private prodservec:ServiceService){}
  addtocart(value:Interface){
    this.prodservec.addToCart(value)
  }
  
   add(variabl:Interface){
     let x=this.prodict.find((v)=>v.id==variabl.id)
     if(x){
      x.pquantity++;
     }else{
        this.prodict.push({...variabl , pquantity:1})
     }
   }
   remove(prd: Interface) {
    let index = this.prodict.findIndex((v) => v.id === prd.id);
    if (index !== -1) {
        let item = this.prodict[index];
        if (item.pquantity > 0) {
            if (item.pquantity === 1) {
                this.prodict.splice(index, 1);
            } else {
                item.pquantity--;
                this.totail-=item.psarly;
            }
        }
    }
}

}
