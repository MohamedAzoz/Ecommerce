import { Routes } from '@angular/router';
import { MainComponent } from './compunent/main/main.component';
import { HomeComponent } from './compunent/home/home.component';
import { ProdicuteComponent } from './compunent/prodicute/prodicute.component';
import { EroreComponent } from './compunent/error/erore.component';
import { AboutUsComponent } from './compunent/about-us/about-us.component';
import { ContactUsComponent } from './compunent/contact-us/contact-us.component';
import { ProductDetailsComponent } from './compunent/product-details/product-details.component';
import { LoginComponent } from './compunent/login/login.component';
import { SignUpComponent } from './compunent/sign-up/sign-up.component';
import { authAccessGuard } from './Guards/auth-access.guard';
import { CartComponent } from './compunent/cart/cart.component';
import { ProfileComponent } from './compunent/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
        canActivate: [authAccessGuard]
      },
      {
        path: 'products',
        component: ProdicuteComponent,
        title: 'products',
        canActivate: [authAccessGuard]
      },
      {
        path: 'ProductDetails/:Prdid',
        component: ProductDetailsComponent,
        title: 'Product Details',
      },
      {
        path: 'Card',
        component: AboutUsComponent,
        title: 'Card',
        canActivate: [authAccessGuard]
      },
      {
        path: 'Contact',
        component: ContactUsComponent,
        title: 'Contact us',
        canActivate: [authAccessGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'profile',
        canActivate: [authAccessGuard]
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'cart',
        canActivate: [authAccessGuard]
      },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'signup', component: SignUpComponent, title: 'Sign up' },
    ],
  },
  { path: '**', component: EroreComponent, title: 'error' },
];
