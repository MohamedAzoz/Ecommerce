import { Routes } from '@angular/router';
import { MainComponent } from './compunent/main/main.component';
import { HomeComponent } from './compunent/home/home.component';
import { ProdicuteComponent } from './compunent/prodicute/prodicute.component';
import { EroreComponent } from './compunent/erore/erore.component';
import { SearchComponent } from './compunent/search/search.component';
import { AboutUsComponent } from './compunent/about-us/about-us.component';
import { ContactUsComponent } from './compunent/contact-us/contact-us.component';

export const routes: Routes = [
{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"",component:MainComponent,children:[
  {path:"home",component:HomeComponent,title:'home'},
  {path:"products",component:ProdicuteComponent,title:'products'},
  {path:"About",component:AboutUsComponent,title:'About us'},
  {path:"Contact",component:ContactUsComponent,title:'Contact us'},
  {path:"search",component:SearchComponent,title:'search'}
]},
  {path:"**",component:EroreComponent,title:'error'}

];
