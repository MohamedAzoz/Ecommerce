import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Interface } from '../models/interface';
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {
  private lovesubject = new BehaviorSubject<Interface[]>([]); // قائمة المنتجات في السلة
  loveItems$ = this.lovesubject.asObservable(); // Observable لتحديث المشتركين
  love:number=0
  constructor(
    private APIclint:HttpClient
  ) {}
  getAllData():Observable<Interface[]>{
     return this.APIclint.get<Interface[]>(`${environment.ApiUrl}/prodact`);
  }
  getOneproduct(prId:string):Observable<Interface>{
    return this.APIclint.get<Interface>(`${environment.ApiUrl}/prodact/${prId}`);
  }
  searchAPI(Brand:string):Observable<Interface[]>{
    return this.APIclint.get<Interface[]>(`${environment.ApiUrl}/prodact?brand=${Brand}`);
  }
  searchByApi(name:string):Observable<Interface[]>{
    return this.APIclint.get<Interface[]>(`${environment.ApiUrl}/prodact?pname=${name}`);
  }
  deletuser(prId:string):Observable<User>{
    return this.APIclint.delete<User>(`${environment.ApiUrl}/user/${prId}`);
  }
  addtolove(product: Interface) {
    const currentCart = this.lovesubject.getValue();
    const existingProduct = currentCart.find((v) => v.id === product.id);

    if (existingProduct) {
      existingProduct.pquantity++;
      this.love=existingProduct.pquantity;
    } else {
      currentCart.push({ ...product, pquantity: 1 });
      this.love=this.love+1;
    }
    this.lovesubject.next([...currentCart]);
  }
  getloves() {
    return this.lovesubject.asObservable();
  }
  removelove(productId: string) {
    const currentCart = this.lovesubject.getValue();
    const updatedCart = currentCart.filter(item => item.pname !== productId);
    this.lovesubject.next(updatedCart); // تحديث القائمة
  }
}
