import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
//   USER_URL: string = "http://localhost:8080/api/";
USER_URL: string = "http://localhost:3000";
  constructor(private httpClient :HttpClient) { }
  public signUp(user: any, img:File){
    console.log("user from service");
    let formData =new FormData();
   formData.append('firstName',user.firstName);
   formData.append('lastName',user.lastName);
   formData.append('email',user.email);
   formData.append('password',user.password);
   formData.append('tel',user.tel);
   formData.append('img',img);
   console.log(formData)
    return this.httpClient.post<{message:string}>(`${this.USER_URL + '/api/signUp'}`, formData)
 }
 public Ajouter(user: any){
  console.log("admin from service");
  return this.httpClient.post<{message:string}>(`${this.USER_URL + '/api/addAdmin'}`, user)
}
public getUser(id:any){
  return this.httpClient.get<{user:any}>(`${this.USER_URL + '/api/allUsers'}/${id}`); 
}
   
 public getUsers(){ 
  return this.httpClient.get<{users:any}>(this.USER_URL + '/api/allUsers');
}
public deleteUser(id:any){
  return this.httpClient.delete<{message:string}>(`${this.USER_URL + '/api/deleteUser'}/${id}`)
}
public login(user: any){
  console.log("user from service");
  return this.httpClient.post<{findedUser:any}>(`${this.USER_URL + '/api/login'}`, user)
}
public updatePwd(user:any,password: any){
  console.log("pass",password);
  let update={"user":user,"password":password};
  console.log("service",update);
  
  console.log("user from service");
  return this.httpClient.post<{message:any}>(`${this.USER_URL + '/api/updatePwd'}`, update)
}
public welcome(user: any){
  console.log("message from service");
  return this.httpClient.post<{message:any}>(`${this.  USER_URL + '/api/welcome'}`, user)
}
public updateUser(user:any){
  return this.httpClient.put<{message:string}>(`${this.USER_URL + '/api/editUser'}/${user.id}`, user)
}
public reservation(user: any){
  console.log("message from service");
  return this.httpClient.post<{message:any}>(`${this.  USER_URL + '/api/reservations'}`, user)
}
}
