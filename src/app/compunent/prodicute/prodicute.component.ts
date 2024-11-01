import { Component, OnInit } from '@angular/core';
import { Interface } from '../../modul/interface';

@Component({
  selector: 'app-prodicute',
  standalone: true,
  imports: [],
  templateUrl: './prodicute.component.html',
  styleUrl: './prodicute.component.css'
})
export class ProdicuteComponent implements OnInit {
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
