import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Interface } from '../../modul/interface';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdicuteComponent } from "../prodicute/prodicute.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgClass, RouterModule, ProdicuteComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  doserche:string="";



}
