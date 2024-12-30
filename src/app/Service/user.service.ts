import { ServiceAPIService } from './service-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  header={}
  // root!:string
  oneuser!:User
  constructor(
    private APIclint:HttpClient,
  ) {
    this.header={Headers:new HttpHeaders({
      "Content-type":"application/json"
    })}
  }

  addUser(user:User):Observable<User>{
    return  this.APIclint.post<User>(`${environment.ApiUrl}/user`,user,this.header)
  }
  getalluser():Observable<User[]>{
    return this.APIclint.get<User[]>(`${environment.ApiUrl}/user`);
 }
 getOneuser(prId:string):Observable<User>{
   return this.APIclint.get<User>(`${environment.ApiUrl}/user?email=${prId}`);
 }
 loadAllUsers() {
  this.getalluser().subscribe((users) => {
    this.usersSubject.next(users);
  });
}

loginUser(email: string): void {
  const currentUsers = this.usersSubject.getValue(); // الحصول على المستخدمين الحاليين
  const existingUser = currentUsers.find((user) => user.email === email); // البحث عن المستخدم

  if (existingUser) {
    // إذا كان المستخدم موجودًا بالفعل
    this.currentUserSubject.next(existingUser);
  } else {
    // إذا لم يكن المستخدم موجودًا، يتم جلبه من API
    this.getOneuser(email).subscribe(
      (user) => {
        if (user) {
          this.currentUserSubject.next(user); // تحديث المستخدم الحالي
          this.usersSubject.next([...currentUsers, user]); // إضافة المستخدم إلى القائمة المحلية
        } else {
          console.error('User not found.');
        }
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
}

// تسجيل مستخدم جديد (Sign Up)
signUpUser(user: User): void {
  this.addUser(user).subscribe(
    (newUser) => {
      const currentUsers = this.usersSubject.getValue();
      this.usersSubject.next([...currentUsers, newUser]); // تحديث القائمة المحلية
      this.currentUserSubject.next(newUser); // تعيين المستخدم الحالي
    },
    (error) => {
      console.error('Error creating user:', error);
    }
  );
}

// الوصول إلى المستخدم الحالي كمصدر Observable
get currentUser$(): Observable<User | null> {
  return this.currentUserSubject.asObservable();
}

// الوصول إلى قائمة المستخدمين المخزنين محليًا كمصدر Observable
getUsers(): Observable<User[]> {
  return this.usersSubject.asObservable();
}
}
