import { Component, OnInit } from '@angular/core';
import { Interface } from '../../modul/interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  prudect!:Interface[]
  constructor(){
    
  }
  ngOnInit(): void {
    this.prudect=[
      {
        pname:"nbhjghm",
        pquantity:20,
        pid:4,
        psarly:200,
        pImg:"mjljhuguyf",
        pcateogryName:"jgjfydtr"
    },
    {
      pname:"nbhjghm",
      pquantity:20,
      pid:4,
      psarly:200,
      pImg:"mjljhuguyf",
      pcateogryName:"jgjfydtr"
  }
    ]

  }

}
