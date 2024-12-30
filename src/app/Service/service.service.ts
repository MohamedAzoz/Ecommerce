import { Injectable, OnInit } from '@angular/core';
import { Interface } from '../models/interface';
import { BehaviorSubject } from 'rxjs';
import { ServiceAPIService } from './service-api.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {
  private behaversabuject = new BehaviorSubject<Interface[]>([]); // قائمة المنتجات في السلة
  cartItems$ = this.behaversabuject.asObservable(); // Observable لتحديث المشتركين
  private psabuject = new BehaviorSubject<Interface[]>([]); // قائمة المنتجات في السلة

  totail:number=0;
  prudectfilt: Interface[] = [];
  prodict:Interface[]=[]
  prudect:Interface[]=[]
  manyprudoct!:Interface[]
  root!:User|undefined
  qountity:number=0
  constructor(private service:ServiceAPIService) {
    // this.behaversabuject=new BehaviorSubject<Interface[]>(this.manyprudoct)
  }
  ngOnInit(): void {
        // this.behaversabuject.asObservable()
  }

  addToCart(product: Interface) {
    const currentCart = this.behaversabuject.getValue();
    const existingProduct = currentCart.find((v) => v.id === product.id);

    if (existingProduct) {
      existingProduct.pquantity++;
      this.qountity=existingProduct.pquantity;
    } else {
      currentCart.push({ ...product, pquantity: 1 });
      this.qountity=this.qountity+1;
    }
    this.behaversabuject.next([...currentCart]);
  }
  getqountity(){
    return this.qountity;
  }

  getCartItems() {
    return this.behaversabuject.asObservable();
  }

  removeFromCart(productId: Interface) {
    const currentCart = this.behaversabuject.getValue();
    // const updatedCart = currentCart.filter(item => item.id !== productId.id); // حذف المنتج
    let index = currentCart.findIndex((v) => v.id === productId.id);
    if (index !== -1) {
      let item = currentCart[index];
      if (item.pquantity > 0) {
        if (item.pquantity === 1) {
          currentCart.splice(index, 1);
        } else {
          item.pquantity--;
          this.totail-=item.psarly;
        }
        this.behaversabuject.next(currentCart); // تحديث القائمة
        }
    }
  }

  remove(productId: string) {
    const currentCart = this.behaversabuject.getValue();
    const updatedCart = currentCart.filter(item => item.pname !== productId);
    this.behaversabuject.next(updatedCart); // تحديث القائمة

  }

  // إعادة تعيين السلة
  clearCart() {
    this.behaversabuject.next([]); // تعيين السلة كفارغة
  }



  addTobuy(product: Interface) {
    const currentCart = this.psabuject.getValue();
    const existingProduct = currentCart.find((v) => v.id === product.id);

    if (existingProduct) {
      existingProduct.pquantity++;
      this.qountity=existingProduct.pquantity;
    } else {
      currentCart.push({ ...product, pquantity: 1 });
      this.qountity=this.qountity+1;
    }
    this.psabuject.next([...currentCart]);
  }

  getbuy() {
    return this.psabuject.asObservable();
  }



  search(product: string) {
    // const currentCart = this.behaversabuject.getValue(); // الحصول على المنتجات الحالية
     this.service.searchAPI(product).subscribe((data)=>{
      return data
     })

  }

  prodictbyid(id:number):Interface|undefined{
    return this.prudect.find((i)=>i.id ==id)
  }

   getarrids():number[]{
    return this.prudect.map(id=>id.id)
   }

//    add(variabl:Interface){
//      let x=this.prodict.find((v)=>v.id==variabl.id)
//      if(x){
//       x.pquantity++;
//      }else{
//         this.prodict.push({...variabl , pquantity:1})
//      }
//      return x;
//    }
//    remove(prd: Interface) {
//     let index = this.prodict.findIndex((v) => v.id === prd.id);
//     if (index !== -1) {
//         let item = this.prodict[index];
//         if (item.pquantity > 0) {
//             if (item.pquantity === 1) {
//                 this.prodict.splice(index, 1);
//             } else {
//                 item.pquantity--;
//                 this.totail-=item.psarly;
//             }
//         }
//     }
// }


}
