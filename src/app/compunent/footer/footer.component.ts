import { Component } from '@angular/core';
import { Class } from '../../models/class';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  course:Class;
  date:Date=new Date();
  constructor(){
    this.course=new Class("Ecommerce",["sohag","cairo","Alexandria"],"download.png")
  }
}
